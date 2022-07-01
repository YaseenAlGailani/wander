import imgFetcher from "./imgFetcher"
import tryWeather from "./weather"

export default function initLocation() {

    let $location_inputs = document.querySelectorAll('input[name=location]');

    $location_inputs.forEach($input => {
        $input.addEventListener('change', function () {
            updateWidgetImage.call(this);
            getCoordinates.call(this);
            tryWeather(this.closest('[data-widget]'));
        });
    })
}

function updateWidgetImage() {
    let $imgElement = this.closest('[data-widget]').querySelector('[data-block=widget-img]');
    let location = this.value;
    imgFetcher(location, $imgElement);
}

async function getCoordinates() {
    try {
        let location = this.value;
        let resp = await fetch(`http://localhost:3000/api/coord?loc=${encodeURIComponent(location)}`);
        let data = await resp.json()
        if (data.status >= 400) {
            throw (Error(data.message));
        }
        console.log(data)
    }
    catch (error) {
        console.error('[coodinates] ', error)
    }
}