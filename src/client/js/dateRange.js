import tryWeather from "./weather"
import { DateRangePicker } from 'vanillajs-datepicker';
import '../../../node_modules/vanillajs-datepicker/sass/datepicker.scss'
import * as utils from './date_utils'

export default function initDateRange() {

    let $date_ranges = document.querySelectorAll('[data-block=date-range]');

    $date_ranges.forEach($date_range => {

        const rangepicker = new DateRangePicker($date_range,{
            allowOneSidedRange:true,
            dateDelimiter: '-'
        });

        let $start_date = $date_range.querySelector('input[name=start-date]');
        let $end_date = $date_range.querySelector('input[name=end-date]');
        let $days_long = $date_range.querySelector('[data-block=days-long]');
        let $days_away = $date_range.querySelector('[data-block=days-away]');

        $start_date.addEventListener('changeDate', handleDateChange);
        $end_date.addEventListener('changeDate', handleDateChange);
        
        //stop mobile keyboard from popping up
        $start_date.setAttribute('inputmode', 'none');
        $end_date.setAttribute('inputmode', 'none');
        $start_date.classList.add('c-date__input');
        $end_date.classList.add('c-date__input');

        function handleDateChange() {
            let $viewElement = this.closest('[data-block=capsule]').querySelector('[data-block=capsule-view]');

            $viewElement.innerText = this.value;

            if (utils.compareDates($start_date.value, $end_date.value)) {
                let today = new Date().getTime();
                let days_long = utils.calculateDays($start_date.value, $end_date.value);
                let days_away = utils.calculateDays(today, $start_date.value);

                $days_long.innerHTML = `${days_long} days long`;
                $days_away.innerHTML = days_away < 0 ? `${Math.abs(days_away)} days ago` : `${days_away} days away`;
                $days_long.parentElement.classList.remove('h-hidden');

                tryWeather(this.closest('[data-widget]'));

            } else {
                $days_long.parentElement.classList.add('h-hidden');
            }
        }
    })
}
