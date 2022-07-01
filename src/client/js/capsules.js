import { v4 as uuid } from 'uuid'

export default function initCapsules() {

    let $capsules = document.querySelectorAll('[data-block=capsule]');

    $capsules.forEach($capsule => {
        let $viewElement = $capsule.querySelector('[data-block=capsule-view]');
        
        $viewElement.addEventListener('click', editModeOn);
        $viewElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                editModeOn(e);
            }
        });
        
        let inputType = $viewElement.dataset.inputType;

        //setup inputElement
        let $inputElement = document.createElement("input");
        $inputElement.id = $viewElement.dataset.inputName + ':' + uuid();
        $inputElement.name = $viewElement.dataset.inputName;
        $inputElement.placeholder = $viewElement.dataset.inputLabel;
        $inputElement.dataset.block = 'capsule-input';
        $inputElement.classList.add('c-capsule__input');

        $inputElement.addEventListener('blur', handleUserInput);
        $inputElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleUserInput(e);
            }
        });
        
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

function handleUserInput(e){
    let $inputElement = e.target;
    let $inputGroup = $inputElement.parentElement;
    let $viewElement = $inputElement.closest('[data-block=capsule').querySelector('[data-block=capsule-view]');

    if ($inputElement.value) {
        $viewElement.innerText = $inputElement.value;
        $viewElement.classList.remove('empty');
    } else {
        $viewElement.innerText = $viewElement.dataset.inputLabel;
        $viewElement.classList.add('empty');
    }

    $viewElement.classList.remove('h-hidden');
    $inputGroup.classList.add('h-hidden');

    if ($viewElement.dataset.inputType === 'date') {
        $inputElement.removeAttribute('readonly');
    }

}

function editModeOn(e){
    let $viewElement = e.target;
    let $inputElement = $viewElement.closest('[data-block=capsule]').querySelector('[data-block=capsule-input]');
    let $inputGroup = $inputElement.parentElement;

    if ($viewElement.innerText !== $viewElement.dataset.inputLabel) {
        $inputElement.value = $viewElement.innerText;
    }

    if($viewElement.dataset.inputType === 'date'){
        $inputElement.setAttribute('readonly', 'readonly');
    }

    $viewElement.classList.add('h-hidden');
    $inputGroup.classList.remove('h-hidden');

    $inputElement.focus();
}
