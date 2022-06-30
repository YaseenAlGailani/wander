import imgFetcher from "./imgFetcher"

export default function initLocation() {

    let $location_inputs = document.querySelectorAll('input[name=location]');

    $location_inputs.forEach($input => {
        $input.addEventListener('change', function(){
            updateWidgetImage.call(this);
        });
    })
}

function updateWidgetImage(){
    let $imgElement = this.closest('[data-widget]').querySelector('[data-block=widget-img]');
    let location = this.value;
    imgFetcher(location, $imgElement);
}