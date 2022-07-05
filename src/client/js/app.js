import initCapsules from './capsules'
import initControls from './controls'
import { initDateRange, initDatepicker, initTimeInput } from './dateInputs'
import initLocation from './location'
import Destination from './Destination'
import Trip from './Trip'
import { v4 as uuid } from 'uuid'

export default function app() {

    window.addEventListener('DOMContentLoaded', () => {


        let $new_trip = document.getElementById('new-trip');
        $new_trip.addEventListener('click', addTrip);

        // get object from local storage
        let database = JSON.parse(localStorage.getItem('wander_db'));

        // Populate saved user trips and destinations if it is found in the local storage.
        if (database) {
            database.trips.forEach(trip => {
                let $new_trip = addTrip(null, trip.id);
                populateRealm($new_trip, trip.values);

            });
            database.destinations.forEach(destination => {
                let $parent_trip = document.getElementById(destination.parent_id)
                let $new_destination = addDestination($parent_trip, destination.id);
                populateRealm($new_destination, destination.values);
            });
        }

    });

    /**
     * traverses through and populates all inputs from values in the passed data object.
     * 
     * @param {node} $new_realm 
     * @param {object} data 
     */
    function populateRealm($new_realm, data) {
        for (let value in data) {
            let $input = $new_realm.querySelector(`input[name=${value}]`);
            $input.value = data[value];
            $input.dispatchEvent(new Event('changeDate'));
            $input.dispatchEvent(new Event('blur'));
            $input.dispatchEvent(new Event('change'));
        }
    }


    /**
     * Retruns and initiates a new trip node.
     * 
     * @param {event object} e 
     * @param {string} saved_id 
     * @returns new trip node
     */
    function addTrip(e, saved_id) {
        document.querySelector('[data-block=placeholder-trip]').classList.add('h-hidden');
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

        return $trip;
    }

    /**
     * specifies a parent node to which a new destination is attached.
     * 
     * @param {event object} e 
     */

    function newDestination(e) {
        let $parent_trip = e.target.closest('[data-realm=trip]');
        addDestination($parent_trip);
    }

    /**
     * creates a new destination node .
     * 
     * @param {node} $parent_trip 
     * @param {string} saved_id 
     * @returns new destination node.
     */
    function addDestination($parent_trip, saved_id) {
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

        return $destination;
    }

}