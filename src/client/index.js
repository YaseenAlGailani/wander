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

    // get object from local storage
    let database = JSON.parse(localStorage.getItem('wander_db'));

    if(database){
        database.trips.forEach(trip => {
            let $new_trip = addTrip(null, trip.id);
      
            
        });
        database.destinations.forEach(destination => {
            let $parent_trip = document.getElementById(destination.parent_id)
            addDestination($parent_trip, destination.id);
        });
    }

});



function addTrip(e, saved_id) {
    let $trip = document.createElement('article');
    $trip.classList.add('c-trip');
    $trip.setAttribute('data-realm', 'trip');
    $trip.setAttribute('data-control', 'parent');
    $trip.id = saved_id ? saved_id : 'trip:' + uuid();
    $trip.innerHTML = Trip;
    initCapsules($trip);
    initControls($trip);
    initDateRange($trip);
    initDatepicker($trip);
    initTimeInput($trip);
    initLocation($trip);
    document.querySelector('#trips_list').append($trip);

    let $new_destination = $trip.querySelector('[data-block=new-destination]');
    $new_destination.addEventListener('click', newDestination);

}


function newDestination(e) {
    let $parent_trip = e.target.closest('[data-realm=trip]');
    addDestination($parent_trip);
}

function addDestination($parent_trip, saved_id){
    let $destination = document.createElement('article');
    $destination.classList.add('c-destination');
    $destination.setAttribute('data-realm', 'destination');
    $destination.setAttribute('data-control', 'parent');
    $destination.id = saved_id ? saved_id : 'dest:' + uuid();
    $destination.innerHTML = Destination;
    initCapsules($destination);
    initControls($destination);
    initDateRange($destination);
    initDatepicker($destination);
    initTimeInput($destination);
    initLocation($destination);

    $parent_trip.querySelector('#destinations_list').append($destination);
}
