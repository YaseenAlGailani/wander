// takes location name and img element to update
// fetches image from pixabay
// optimises and resizes the image from Pixelixe
// updates the img src attribute to the passed img element


export default async function imgFetcher(location, $img) {
    try {
        console.log(`fetching an image now for ${location}`);
        const resp = await fetch(`http://localhost:3000/api/images?loc=${encodeURIComponent(location)}`);
        if (resp.status >= 400) {
            let data_obj = await resp.json()
            throw (Error(data_obj.message));
        }
        $img.setAttribute('src', await resp.text())
    }
    catch (error) {
        console.error('[image] ', error)
    }

}