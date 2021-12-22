const editNav = () => {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

/* Ouverture Modal */
const openModal = () => {
  elements.modal.buttons.open.forEach((item) => {
    item.addEventListener("click", () => {
      elements.modal.background.style.display = "block";
    });
  });
};

// Issue#1

/*  Fermeture Modal */
const closeModal = () => {
  const eventCloseModal = () => {
    elements.modal.background.style.display = "none";
    elements.modal.confirmForm.style.display = "none";
    elements.modal.form.style.display = "block";
    reset();
  };

  elements.modal.buttons.close.addEventListener("click", eventCloseModal);
  elements.modal.buttons.cross.addEventListener("click", eventCloseModal);
};

// Issue#2, #3 et #4

/* Initialisation stockage de l'état des inputs. false par defaut */
const validInputs = {
  firstName: false,
  lastName: false,
  email: false,
  birthDate: false,
  quantityTournament: false,
};

setInputsValue = () => {
  validInputs.firstName = false;
  validInputs.lastName = false;
  validInputs.email = false;
  validInputs.birthDate = false;
  validInputs.quantityTournament = false;
};

/* Verifie les entrées formulaire affichant message(s) d'erreur si besoin */
const isValidFormFields = (element, regExp, errorElement, keyName) => {
  element.addEventListener("input", () => {
    if (regExp.test(element.value)) {
      validInputs[keyName] = true;
      element.classList.remove("border_error");
      element.classList.add("border_sucess");
      errorElement.style.display = "none";
    } else {
      validInputs[keyName] = false;
      element.classList.remove("border_sucess");
      element.classList.add("border_error");
      errorElement.style.display = "block";
    }
    updateSubmitButton();
    isTermsOfUseChecked(); /*  verificateur des conditions d'utilisation */
  });
};

/* Affiche un message d'erreur sous le bouton submit demandant
la prise de connaissance des conditions d'utilisation */
const isTermsOfUseChecked = () => {
  elements.termsOfUse.addEventListener("click", () => {
    if (elements.termsOfUse.checked === true) {
      elements.error.termsOfUse.style.visibility = "hidden";
      validInputs["termsOfUse"] = true;
    } else {
      elements.error.termsOfUse.style.visibility = "visible";
      validInputs["termsOfUse"] = false;
    }
    updateSubmitButton(); /* Met a jour l'état du bouton submit */
  });
};

const everyInputIsValid = () => Object.values(validInputs).every((input) => input === true);

/* Met a jour l'état du bouton submit en fonction de la conformité du formulaire */

const updateSubmitButton = () => {
  if (everyInputIsValid() === true) {
    elements.modal.buttons.submit.style.backgroundColor = "#fe142f";
    elements.modal.buttons.submit.disabled = false;
    formValid();
  } else {
    elements.modal.buttons.submit.style.backgroundColor = "#585555";
    elements.modal.buttons.submit.disabled = true;
  }
};

/* Création de l'évenement au click permettant d'afficher le message de confirmation */
const formValid = () => {
  elements.modal.buttons.submit.addEventListener("click", (event) => {
    event.preventDefault();
    elements.modal.form.style.display = "none";
    elements.modal.confirmForm.style.display = "block";
  });
};

/* Reset formulaire  */
const reset = () => {
  elements.modal.form.reset();
  setInputsValue();
  updateSubmitButton();
  const resetElements = document.querySelectorAll("#my-form input");
  for (let i = 0, element; (element = resetElements[i++]); ) {
    if (element.value === "") {
      element.classList.remove("border_sucess");
    }
  }
};
