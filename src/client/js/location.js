import imgFetcher from "./imgFetcher"
import tryWeather from "./weather"

export default function initLocation() {

    let $location_inputs = document.querySelectorAll('input[name=location]');

    $location_inputs.forEach($input => {
        $input.addEventListener('change', function () {
            updateWidgetImage.call(this);
            tryWeather(this.closest('[data-widget]'));
        });
    })
}

function updateWidgetImage() {
    let $imgElement = this.closest('[data-widget]').querySelector('[data-block=widget-img]');
    let location = this.value;
    imgFetcher(location, $imgElement);
}

