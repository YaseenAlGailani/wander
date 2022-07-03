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
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
})

let database = {
    trips: [],
    destinations: []
}


app.get('/api/images', (req, res) => {
    axios.get(`https://pixabay.com/api/?key=${process.env.IMG_KEY}&q=${req.query.loc}&image_type=photo&safesearch=true`)
        .then(response => {
            if (response.data.total == 0) {
                res.status(404).send('We couldn\'t find a photo for this location');
            } else {
                res.send(response.data.hits[0].webformatURL);
            }
        }).catch(error => {
            console.log(error);
        })
})

app.get('/api/coord', (req, res) => {
    axios.get(`http://api.geonames.org/searchJSON?q=${req.query.loc}&maxRows=10&username=${process.env.GEO_KEY}`)
        .then(response => {
            if (response.data.totalResultsCount == 0) {
                res.status(404).send({ status: 404, message: 'We couldn\'t find this location' });
            } else {
                let data = {
                    status: 200,
                    lat: response.data.geonames[0].lat,
                    lon: response.data.geonames[0].lng
                };
                res.send(data);
            }
        }).catch(error => {
            console.log(error);
        })
})

app.get('/api/weather/current', (req, res) => {
    axios.get(`https://api.weatherbit.io/v2.0/current?lat=${req.query.lat}&lon=${req.query.lon}&key=${process.env.WEATHER_KEY}`)
        .then(resp => {
            console.log(resp.data);
            res.send(resp.data);
        }).catch(error => {
            console.log(error)
        })
})

app.get('/api/weather/forecast', (req, res) => {
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.query.lat}&lon=${req.query.lon}&key=${process.env.WEATHER_KEY}`)
        .then(resp => {
            res.send(resp.data);
        }).catch(error => {
            console.log(error)
        })
})


app.post('/trip', (req, res) => {
    try {
        //check trip id to see if it exists

        let data = JSON.parse(req.body);

        let index = database.trips.findIndex(item => item.id === data.id);
        console.log('saving!');

        if (index >= 0) {
            let path = ['trips',index, ...data.path];
            storeData(database, path, data.value);
            console.log(database);
            
        } else{
            database.trips.push({id:data.id});
            let path = ['trips', database.trips.length-1, ...data.path];
            storeData(database, path, data.value);
            console.log(database);
        }

    }
    catch (error) {
        console.log(error);
    }


})

app.post('/destination', (req, res) => {
    try {
        console.log('saving!', req.body);
    }
    catch (error) {
        console.log(error);
    }

})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})


function storeData(db, path, value) {
    let destination = path.reduce((cumm, curr, index) => {
        if (typeof cumm[curr] == 'undefined' && index < path.length - 1) {
            cumm[curr] = {};
            return cumm[curr];
        }

        if (index === path.length - 1) {
            cumm[curr] = value;
        }

        return cumm[curr];
    }, db)
}

function getData(db, path) {
    return path.reduce((cum, curr) => {
        return cum[curr];
    }, db);
}