export default function tryWeather($widget) {
    let location = $widget.querySelector('input[name=location]');
    let start_date = $widget.querySelector('input[name=start-date]');
    let end_date = $widget.querySelector('input[name=end-date]')

    if (location.value !== '' && start_date.value !== '' && end_date.value !== ''){
        console.log('Hey! I\'m getting the weather stuff!');
    }
}