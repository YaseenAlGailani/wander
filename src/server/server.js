const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const axios = require('axios').default;
require('dotenv').config();

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080']
}))

app.use(express.static(path.resolve('dist')))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/api/images', function (req, res) {
    axios.get(`https://pixabay.com/api/?key=${process.env.IMG_KEY}&q=${req.query.loc}&image_type=photo&safesearch=true`)
        .then(response => {
            res.send(response.data.hits[0].webformatURL);
        })
})

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`)
})