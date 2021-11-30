// BEGIN - Fonction reset
const reset = () => {
  elements.modalForm.reset();
  citiesSelected = [];
};
// END - Fonction reset

// BEGIN - Selection des villes en fonction de la valeur répondue à "combien de tournoi ?"
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
// END - Selection des villes

// BEGIN - Event Validation


const signUpValidationEvent_ = (event) => {
  event.preventDefault();
  
  const validations = [
  isValidName(elements.firstName.value),
  isValidSurname(elements.lastName.value),
  isValidEmail(elements.email.value),
  isValidBirthdate(elements.birthDate.value),
  isValidNumber(elements.quantityTournament.value),
];
  if (validations.includes(false)){
    alert("Veuillez finir de compléter le formulaire svp")

  } else {
    elements.modalForm.style.display = "none";
  };

};
// END - Event Validation

const createFormEventsListeners = () => {
  formListeners('firstName', isValidName);
  formListeners('lastName', isValidSurname);
  formListeners('email', isValidEmail);
  formListeners('birthDate', isValidBirthdate);
  formListeners('quantityTournament', isValidNumber);

  elements.checkCity.forEach(townSelector);
  elements.signUp.addEventListener("click", signUpValidationEvent_);
};

createFormEventsListeners();
