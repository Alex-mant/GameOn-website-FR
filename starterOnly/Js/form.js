/* BEGIN - DOM ELEMENTS*/
const elements = {
  form : document.getElementById("form"),
  firstName : document.getElementById("first"),
  lastName : document.getElementById("last"),
  email : document.getElementById("email"),
  birthDate : document.getElementById("birthdate"),
  quantityTournament : document.getElementById("quantity"),
  checkCity : document.querySelectorAll(".city-location"),
  signUp : document.querySelector(".btn-submit"),
  modalForm : document.querySelector(".modal-body form"),
  error : {
    firstName : document.querySelector("p.error-fName"),
    lastName : document.querySelector("p.error-lName"),
    email : document.querySelector("p.error-eMail"),
    birthDate : document.querySelector("p.error-bDate"),
    city : document.querySelector("p.error-city"),
    quantityTournament : document.querySelector("p.error-qValue")
  }
};
/* END - DOM ELEMENTS*/

/* BEGIN - Fonction reset */
const reset = () => {
  elements.modalForm.reset();
  citiesSelected = [];
};
/* END - Fonction reset */

/*BEGIN - Selection des villes en fonction de la valeur répondue à "combien de tournoi ?" */
let citiesSelected = [];
const ensureTownChecked = () => elements.checkCity.forEach(p => p.checked = citiesSelected.includes(p));

const townSelector = place => {
    place.addEventListener("click",() =>{ 
    if (citiesSelected.includes(place)){
      citiesSelected = citiesSelected.filter(p => p !== place);
    } else if (citiesSelected.length < Number(elements.quantityTournament.value)) {
      citiesSelected.push(place);
    } else {
      alert('Trop de villes selectionnées');
    }

    ensureTownChecked();
  });
}
/*END - Selection des villes*/

/* BEGIN - Event Validation */
const signUpValidationEvent_ = (event) => {
  event.preventDefault();
  const validations = [
    isValidName(elements.firstName.value),
    isValidSurname(elements.lastName.value),
    isValidEmail(elements.email.value),
    isValidBirthdate(elements.birthDate.value),
    isValidNumber(elements.quantityTournament.value),
    citiesSelected.length < Number(elements.quantityTournament.value)
  ];
  
  if (validations.includes(false)){
    reset();
  } else {
    console.log("Confirmation de l'inscription !");
  };

};
/* END - Event Validation */

const createEventsListeners = () => {
  formListeners('firstName', isValidName);
  formListeners('lastName', isValidSurname);
  formListeners('email', isValidEmail);
  formListeners('birthDate', isValidBirthdate);
  formListeners('quantityTournament', isValidNumber);

  elements.checkCity.forEach(townSelector);
  elements.signUp.addEventListener("click", signUpValidationEvent_);
};

createEventsListeners();
