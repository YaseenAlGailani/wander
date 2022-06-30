export default function initDateRange() {

    /* 
    requirements:
    - start date checks end date on change
    - end date checks start date on change
    - if condition is met, calculate days long and days away and display them
    - if condition fails, display error, and hide days long and days away
    
    to do
    - attach a change event listener on start and end dates
    - write a function that does the checks
    - write a function that does the calculation
    - write a funtion that populates dates data and shows/hides the dates container
    */

    let $date_ranges = document.querySelectorAll('[data-block=date-range]');

    $date_ranges.forEach($date_range => {
        let $start_date = $date_range.querySelector('input[name=start-date]');
        let $end_date = $date_range.querySelector('input[name=end-date]');
        let $days_long = $date_range.querySelector('[data-block=days-long]');
        let $days_away = $date_range.querySelector('[data-block=days-away]');

        $start_date.addEventListener('change', handleDateChange);
        $end_date.addEventListener('change', handleDateChange);

        function handleDateChange(){
            if ($start_date.value) $end_date.setAttribute('min', $start_date.value);
            if ($end_date.value) $start_date.setAttribute('max', $end_date.value);
            
            if (compareDates($start_date.value, $end_date.value)) {
                let today = new Date().getTime();
                let days_long = calculateDays($start_date.value, $end_date.value);
                let days_away = calculateDays(today, $start_date.value);

                $days_long.innerHTML = `${days_long} days long`;
                $days_away.innerHTML = days_away < 0 ? `${Math.abs(days_away)} days ago` : `${days_away} days away`;
                $days_long.parentElement.classList.remove('h-hidden');
            } else{
                $days_long.parentElement.classList.add('h-hidden');
            }
        }

    })


}

function compareDates(start, end) {
    let date_start = new Date(start).getTime();
    let date_end = new Date(end).getTime();

    return date_start <= date_end;
}

function calculateDays(start, end){
    let date_start = new Date(start).getTime();
    let date_end = new Date(end).getTime();
    let dayInMs = 24 * 60 * 60 * 1000;

    return Math.round((date_end - date_start) / dayInMs);
}