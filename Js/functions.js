function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Issue#1

/* Ouverture Modal */
const openModal = () => {
  elements.modal.buttons.open.forEach((item) => {
    item.addEventListener("click", () => {
      elements.modal.background.style.display = "block";
    });
  });
};

/*  Fermeture Modal */
const closeModal = () => {
  const eventCloseModal = () => {
    elements.modal.background.style.display = "none";
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

/* Verifie les entrées formulaire affichant message(s) d'erreur si besoin */
const isValidFormFields = (element, regExp, errorElement, keyName) => {
  element.addEventListener("blur", () => {
    if (regExp.test(element.value)) {
      element.style.border = "2px solid rgb(146, 239, 155)";
      errorElement.style.display = "none";
      validInputs[keyName] = true;
    } else {
      element.style.border = "2px solid rgb(239, 146, 146)";
      errorElement.style.display = "block";
      validInputs[keyName] = false;
    }
    updateSubmitButton(); /* Met a jour l'état du bouton submit */
  });
};

/* Affiche un message d'erreur sous le bouton submit demandant
la prise de connaissance des conditions d'utilisation */
const isTermsOfUseChecked = (keyName) => {
  elements.termsOfUse.addEventListener("click", () => {
    if (elements.termsOfUse.checked === true) {
      elements.error.termsOfUse.style.visibility = "hidden";
      validInputs[keyName] = true;
    } else {
      elements.error.termsOfUse.style.visibility = "visible";
      validInputs[keyName] = false;
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
  } else {
    elements.modal.buttons.submit.style.backgroundColor = "#585555";
    elements.modal.buttons.submit.disabled = true;
  }
};

/* Création de l'évenement au click permettant d'afficher le message de confirmation */
const eventListenerSubmitButton = () => {
  elements.modal.buttons.submit.addEventListener("click", (event) => {
    event.preventDefault();
    elements.modal.form.style.display = "none";
    elements.modal.confirmForm.style.display = "block";
  });
};
