import * as date from './date_utils'
import getCoordinates from './coordinates'

/**
 * Checks if location, start and end date values are entered in the passed trip or destination.
 * Calls current weather and forecast weather fetching.
 * Injects data into the DOM.
 * 
 * @param {node} $parent_realm 
 */
export default async function tryWeather($parent_realm) {
    let $location = $parent_realm.querySelector('input[name=location]');
    let $start_date = $parent_realm.querySelector('input[name=start_date]');
    let $end_date = $parent_realm.querySelector('input[name=end_date]');
    let $widget = $parent_realm.querySelector('[data-widget=weather]');

    if ($location.value !== '' && $start_date.value !== '' && $end_date.value !== '') {

        let coord = await getCoordinates($location.value);
        let today = new Date().getTime();
        let days_to_start = date.calculateDays(today, $start_date.value);
        let days_to_end = date.calculateDays(today, $end_date.value);

        if (days_to_start > 16 || days_to_end < 0) {
            $widget.classList.add('h-hidden');

        } else if (days_to_start < 16) {
            let current_weather = await getCurrentWeather(coord.lat, coord.lon);
            injectCurrentWeather($parent_realm, current_weather);

            let forecast_weather = await getForecastWeather(coord.lat, coord.lon);
            $widget.classList.remove('h-hidden');

            let forecast_array = []
            
            if (days_to_start > 0) {
                if (days_to_end >= 7) {
                    forecast_array = forecast_weather.data.slice(days_to_start + 1, days_to_start + 8);
                } else {
                    forecast_array = forecast_weather.data.slice(days_to_start + 1, days_to_end +2 );
                }
            } else {
                if (days_to_end >= 7) {
                    forecast_array = forecast_weather.data.slice(2, 9);
                } else {
                    forecast_array = forecast_weather.data.slice(2, days_to_end + 2);
                }
            }
            injectForecastWeather($parent_realm, forecast_array);
        }

    }
}

async function getCurrentWeather(lat, lon) {
    try {

        let resp = await fetch(`http://localhost:3000/api/weather/current?lat=${lat}&lon=${lon}`);
        return (await resp.json());

        
    }
    catch (error) {
        console.error(new Error(error));
    }
}

function injectCurrentWeather($widget, weather) {
    $widget.querySelector('[data-block=current-temp]').innerText = weather.data[0].temp;
    $widget.querySelector('[data-block=current-desc]').innerText = weather.data[0].weather.description;
    $widget.querySelector('[data-block=current-w-icon]').src = `http://localhost:3000/images/weather-icons/${weather.data[0].weather.icon}.png`
    $widget.querySelector('[data-block=current-w-icon]').alt = weather.data[0].weather.description;
}

async function getForecastWeather(lat, lon) {
    try {

        let resp = await fetch(`http://localhost:3000/api/weather/forecast?lat=${lat}&lon=${lon}`);
        return (await resp.json());
    }
    catch (error) {
        console.error(new Error(error));
    }
}

function injectForecastWeather($widget, forecast_array) {
    let forecast_List = document.createElement('ul');
    forecast_List.classList.add('c-forecast-weather__list');

    forecast_array.forEach(item => {

        let li = document.createElement('li');
        li.classList.add('c-forecast-weather__item')
        li.innerHTML =
        `
        <div class="c-forecast-weather__title">
            <span class="c-forecast-weather__day">${date.getDayName(item.valid_date)}</span>
            <span class="c-forecast-weather__date">${item.valid_date}</span>
        </div>
        <div class="c-forecast-weather__weather">
            <img class="c-forecast-weather__icon" src="http://localhost:3000/images/weather-icons/${item.weather.icon}.png" alt="${item.weather.description}">
            <span class="c-forecast-weather__desc">${item.weather.description}</span>
        </div>
        <div class="c-forecast-weather__temps">
            <span class="c-forecast-weather__temp">${item.temp}&deg;c</span>
            <div class="c-forecast-weather__ranges">
                <span class="c-forecast-weather__point">L:${item.min_temp}&deg;</span>
                <span class="c-forecast-weather__point">H:${item.max_temp}&deg;</span>
            </div>
        </div>
        `
        forecast_List.appendChild(li)
    });

    $widget.querySelector('[data-block=forecast-weather').innerHTML = '';
    $widget.querySelector('[data-block=forecast-weather').appendChild(forecast_List);
}