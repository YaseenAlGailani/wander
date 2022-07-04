export default async function getCoordinates(location) {
    try {
        console.log('fetching coordinates')
        let resp = await fetch(`http://localhost:3000/api/coord?loc=${encodeURIComponent(location)}`);
        let data = await resp.json()
        console.log('[COORD STATUS]', data.status)
        if (data.status >= 400) {
            throw (Error(data.message));
        }
        return {lat:data.lat, lon:data.lon};
    }
    catch (error) {
        console.error(new Error(error))
    }
}