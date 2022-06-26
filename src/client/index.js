import './styles/main.scss';

window.addEventListener('DOMContentLoaded', ()=>{
    let $controls_close = document.querySelectorAll('.c-controls__close');
    let $controls_show = document.querySelectorAll('.c-controls__show');
    let $backdrop = document.querySelectorAll('.c-controls__backdrop');

    $controls_show.forEach((button) => {
        button.addEventListener('click', function(e){
            let $controls = this.closest('.c-controls');
            let $controls_box = $controls.querySelector('.c-controls__box');
            let $backdrop = $controls.querySelector('.c-controls__backdrop');
            
            $controls_box.classList.add('is-expanded');
            $backdrop.classList.remove('is-hidden');
        });
    });

    $controls_close.forEach((button) => {
        button.addEventListener('click', function(e) {
            let $controls = this.closest('.c-controls');
            let $controls_box = $controls.querySelector('.c-controls__box');
            let $backdrop = $controls.querySelector('.c-controls__backdrop');

            $controls_box.classList.remove('is-expanded');
            $backdrop.classList.add('is-hidden');
        });
    });
});