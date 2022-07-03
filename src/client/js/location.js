import imgFetcher from "./imgFetcher"
import tryWeather from "./weather"

export default function initLocation($parent_realm) {

    let $location_inputs = $parent_realm.querySelectorAll('input[name=location]');

    $location_inputs.forEach($input => {
        $input.addEventListener('change', function () {
            updateWidgetImage.call(this, $parent_realm);
            tryWeather($parent_realm);
        });
    })
}

function updateWidgetImage($parent_realm) {
    let $imgElement = $parent_realm.querySelector('[data-block=widget-img]');
    let location = this.value;
    imgFetcher(location, $imgElement);
}

