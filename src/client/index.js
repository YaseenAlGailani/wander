import './styles/main.scss'
import './styles/normalize.scss'
import initCapsules from './js/capsules'
import initControls from './js/controls'
import initDateRange from './js/date'
import initLocation from './js/location'

window.addEventListener('DOMContentLoaded', () => {
    initCapsules();
    initControls();
    initDateRange();
    initLocation();


});