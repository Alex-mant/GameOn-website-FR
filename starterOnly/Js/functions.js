/* Issue#1 */

// Ouverture Modal
const openModal = () => {
    elements.modal.buttons.open.addEventListener("click", () =>{
        elements.modal.background.style.display = "block";
    });
}
// Fermeture Modal
const closeModal = () => {
    const eventCloseModal = () => {
        elements.modal.background.style.display = "none";
    }

    elements.modal.buttons.close.addEventListener("click", eventCloseModal);
    elements.modal.buttons.cross.addEventListener("click",eventCloseModal);
}

/* Issue#2,#3 et #4 */

// Verificateur des entrées formulaire
const allFieldsValid = [];
const isValidFormFields = (element, regExp, errorElement) =>  {
    element.addEventListener("blur", () => {
        if (regExp.test(element.value)) {
            element.style.border = "2px solid rgb(146, 239, 155)";
            errorElement.style.display = "none";
            allFieldsValid.push(regExp.test(element.value));
            
        } else {
            element.style.border = "2px solid rgb(239, 146, 146)"            
            errorElement.style.display = "block"
        }
        submitButton();
    });
};

// Validateur avant submit
const submitButton = () => {                 
    if (allFieldsValid.length >= 5) {            
        elements.modal.buttons.submit.style.backgroundColor = "#fe142f";
        elements.modal.buttons.submit.disabled = false;        
    }         
    else {
        console.log("submitButton error");
    }

    elements.modal.buttons.submit.addEventListener("click", (event) => {
        event.preventDefault();
        elements.modal.form.style.display = "none";
    });
}    