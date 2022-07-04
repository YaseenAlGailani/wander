import { saveToLocalStorage } from "./saveData";

export default function initControls($parent_realm) {
    let $controls_close = $parent_realm.querySelectorAll('[data-controls=close]');
    let $controls_show = $parent_realm.querySelectorAll('[data-controls=show]');
    let $controls_toggle = $parent_realm.querySelectorAll('[data-controls=toggle]');
    let $controls_delete = $parent_realm.querySelectorAll('[data-controls=delete]');

    $controls_show.forEach((button) => {
        let $controls = button.closest('[data-block=controls]');
        let $controls_box = $controls.querySelector('[data-block=controls-box]');
        let $backdrop = $controls.querySelector('[data-block=controls-backdrop]');

        button.addEventListener('click', () => {
            $controls_box.classList.add('is-expanded');
            $backdrop.classList.remove('is-hidden');

            $backdrop.onclick = function () {
                $controls_box.classList.remove('is-expanded');
                this.classList.add('is-hidden');
            }
        });
    });

    $controls_close.forEach((button) => {
        let $controls = button.closest('[data-block=controls]');
        let $controls_box = $controls.querySelector('[data-block=controls-box]');
        let $backdrop = $controls.querySelector('[data-block=controls-backdrop]');

        button.addEventListener('click', () => {

            $controls_box.classList.remove('is-expanded');
            $backdrop.classList.add('is-hidden');
        });
    });

    $controls_toggle.forEach((button) => {
        let $toggle_parent = button.closest('[data-control=parent');
        let $toggle_target = $toggle_parent.querySelector('[data-control=target');

        button.addEventListener('click', () => {
            $toggle_target.classList.toggle('h-collapsed');
            button.classList.toggle('c-controls__btn--rotated');
        });
    });


    $controls_delete.forEach((button) => {
        let $toggle_parent = button.closest('[data-control=parent');
        let id = $toggle_parent.id;
        let parent_realm = $toggle_parent.dataset.realm;

        button.addEventListener('click', async () => {
            $toggle_parent.remove();
            try {
                let resp = await fetch(`http://localhost:3000/${parent_realm}/delete`, {
                    method: 'POST',
                    body: JSON.stringify({ id }),
                    credentials: 'same-origin',
                });

                let database = await resp.json();

                saveToLocalStorage(database);

            } catch (error) {
                console.log(new Error(error));
            }
        });
    });


}