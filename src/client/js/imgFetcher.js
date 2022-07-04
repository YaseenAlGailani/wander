export default async function imgFetcher(location, $img) {
    try {

        const resp = await fetch(`http://localhost:3000/api/images?loc=${encodeURIComponent(location)}`);
        if (resp.status >= 400) {
            let data_obj = await resp.json()
            throw (Error(data_obj.message));
        }
        $img.setAttribute('src', await resp.text())
    }
    catch (error) {
        console.error(new Error(error));
    }

}