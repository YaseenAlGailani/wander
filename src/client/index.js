import './styles/main.scss';
import './styles/normalize.scss';
import initCapsules from './js/capsules'
import initDateRange from './js/date'

window.addEventListener('DOMContentLoaded', () => {
    initCapsules();
    initDateRange();

    let $controls_close = document.querySelectorAll('.c-controls__close');
    let $controls_show = document.querySelectorAll('.c-controls__show');


    $controls_show.forEach((button) => {
        button.addEventListener('click', function (e) {
            let $controls = this.closest('.c-controls');
            let $controls_box = $controls.querySelector('.c-controls__box');
            let $backdrop = $controls.querySelector('.c-controls__backdrop');

            $controls_box.classList.add('is-expanded');
            $backdrop.classList.remove('is-hidden');

            $backdrop.onclick = function () {
                $controls_box.classList.remove('is-expanded');
                this.classList.add('is-hidden');
            }
        });
    });

    $controls_close.forEach((button) => {
        button.addEventListener('click', function (e) {
            let $controls = this.closest('.c-controls');
            let $controls_box = $controls.querySelector('.c-controls__box');
            let $backdrop = $controls.querySelector('.c-controls__backdrop');

            $controls_box.classList.remove('is-expanded');
            $backdrop.classList.add('is-hidden');
        });
    });


});