import { v4 as uuid } from 'uuid'
import saveData from './saveData';

export default function initCapsules($parent_realm) {

    let $capsules = $parent_realm.querySelectorAll('[data-block=capsule]');

    $capsules.forEach($capsule => {
        let $viewElement = $capsule.querySelector('[data-block=capsule-view]');
        $viewElement.innerText = $viewElement.dataset.placeholder;

        $viewElement.addEventListener('click', editModeOn);
        $viewElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                editModeOn(e);
            }
        });

        //setup inputElement
        let $inputElement = document.createElement("input");
        $inputElement.id = $viewElement.dataset.inputName + ':' + uuid();
        $inputElement.name = $viewElement.dataset.inputName;
        $inputElement.placeholder = $viewElement.dataset.placeholder;
        $inputElement.dataset.block = 'capsule-input';
        $inputElement.classList.add('c-capsule__input');

        $inputElement.addEventListener('blur', handleInput);


        //setup inputLabel
        let $inputLabel = document.createElement("label");
        $inputLabel.setAttribute("for", $inputElement.id);
        $inputLabel.innerText = $viewElement.dataset.inputLabel;
        $inputLabel.classList.add("h-sr-only");

        //combine into inputGroup
        let $inputGroup = document.createElement("div");
        $inputGroup.dataset.block = 'input-group';
        $inputGroup.appendChild($inputLabel);
        $inputGroup.appendChild($inputElement);

        //append $inputGroup to capsule
        $inputGroup.classList.add('h-hidden');
        $capsule.appendChild($inputGroup);
    });
}

function handleInput() {
    let $inputElement = this;
    let $inputGroup = $inputElement.parentElement;
    let $viewElement = $inputElement.closest('[data-block=capsule').querySelector('[data-block=capsule-view]');

    if ($inputElement.value) {

        if ($viewElement.innerText !== $inputElement.value) {
            saveData(this);
            console.log('saving data!');
        }

        $viewElement.innerText = $inputElement.value;
        $viewElement.classList.remove('h-empty');
    } else {

        if ($viewElement.innerText !== $viewElement.dataset.placeholder) {
            console.log('removing data!');
            saveData(this);
        }

        $viewElement.innerText = $viewElement.dataset.placeholder;
        $viewElement.classList.add('h-empty');
    }

    $viewElement.classList.remove('h-hidden');
    $inputGroup.classList.add('h-hidden');


}

function editModeOn(e) {
    let $viewElement = e.target;
    let $inputElement = $viewElement.closest('[data-block=capsule]').querySelector('[data-block=capsule-input]');
    let $inputGroup = $inputElement.parentElement;

    if ($viewElement.innerText !== $viewElement.dataset.placeholder) {
        $inputElement.value = $viewElement.innerText;
    }

    $viewElement.classList.add('h-hidden');
    $inputGroup.classList.remove('h-hidden');

    $inputElement.focus();
}

