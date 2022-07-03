import './styles/main.scss'
import './styles/normalize.scss'
import initCapsules from './js/capsules'
import initControls from './js/controls'
import { initDateRange, initDatepicker, initTimeInput } from './js/dateInputs'
import initLocation from './js/location'
import Destination from './js/Destination'
import Trip from './js/Trip'
import { v4 as uuid } from 'uuid'

window.addEventListener('DOMContentLoaded', () => {

    let $new_trip = document.getElementById('new-trip');
    $new_trip.addEventListener('click', addTrip);

});



function addTrip(e) {
    let $trip = document.createElement('article');
    $trip.classList.add('c-trip');
    $trip.setAttribute('data-realm', 'trip');
    $trip.setAttribute('data-control', 'parent');
    $trip.id = 'trip:' + uuid();
    $trip.innerHTML = Trip;
    initCapsules($trip);
    initControls($trip);
    initDateRange($trip);
    initDatepicker($trip);
    initTimeInput($trip);
    initLocation($trip);

    document.querySelector('#trips_list').append($trip);


    let $new_destination = $trip.querySelector('[data-block=new-destination]');
    $new_destination.addEventListener('click', addDestination);
}


function addDestination(e) {
    let $trip = e.target.closest('[data-realm=trip]');

    let $destination = document.createElement('article');
    $destination.classList.add('c-destination');
    $destination.setAttribute('data-realm', 'destination');
    $destination.setAttribute('data-control', 'parent');
    $destination.id = 'dest:' + uuid();
    $destination.innerHTML = Destination;
    initCapsules($destination);
    initControls($destination);
    initDateRange($destination);
    initDatepicker($destination);
    initTimeInput($destination);
    initLocation($destination);

    $trip.querySelector('#destinations_list').append($destination);

}
