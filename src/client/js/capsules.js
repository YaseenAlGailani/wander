export default function initCapsules() {

    let $viewElements = document.querySelectorAll('.js-capsule [data-input-name]');

    $viewElements.forEach(viewElement => {
        viewElement.addEventListener('click', mountInputElement);
        viewElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                mountInputElement(e);
            }
        });
    });


    /*
    LAST THOUGHTS
        - need to implement a unique scenario for location inputs since they trigger API calls, update DOM and save data to object
        - need to implement storing data techniques
    */

    function mountInputElement(e) {
        let viewElement = e.target;
        let capsule = viewElement.parentElement;
        let inputType = viewElement.dataset.inputType;
        
        let inputGroup = document.createElement("div");
        let inputLabel = document.createElement("label");
        let inputElement = document.createElement("input");

        //setup inputElement
        inputElement.type = inputType;
        inputElement.id = viewElement.dataset.inputName;
        inputElement.placeholder = viewElement.dataset.inputLabel;
        inputElement.classList.add('c-capsule__input');

        if (viewElement.innerText !== viewElement.dataset.inputLabel) {
            inputElement.value = viewElement.innerText;
        }

        //setup inputLabel
        inputLabel.setAttribute("for", viewElement.dataset.inputName);
        inputLabel.innerText = viewElement.dataset.inputLabel;
        inputLabel.classList.add("h-sr-only");

        //combine into a group
        inputGroup.appendChild(inputLabel);
        inputGroup.appendChild(inputElement);

        //handle dismounting input element
        inputElement.addEventListener("blur", dismountInputElement);

        function dismountInputElement(e) {

            // function to validate inputs
            // function to parse inputs
            // function to save data to db

            viewElement.innerText = e.target.value || e.target.placeholder;

            
            if (e.target.value) {
                viewElement.innerText = e.target.value;
                viewElement.classList.remove('empty');
            } else {
                viewElement.innerText = viewElement.dataset.inputLabel;
                viewElement.classList.add('empty');
            }

            e.target.removeEventListener("blur", dismountInputElement);
            inputGroup.remove();

            viewElement.style.display = "block";
            viewElement.focus();
        }

        viewElement.style.display = "none";
        capsule.appendChild(inputGroup);
        inputElement.focus();
    }
}