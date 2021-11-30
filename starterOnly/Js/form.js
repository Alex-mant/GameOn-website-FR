// BEGIN - Fonction reset
const reset = () => {
  elements.modalForm.reset();
  citiesSelected = [];
};
// END - Fonction reset

// BEGIN - Selection des villes en fonction de la valeur répondue à "combien de tournoi ?"
let citiesSelected = [];
const ensureTownChecked = () => elements.checkCity.forEach((p) => (p.checked = citiesSelected.includes(p)));

const townSelector = (place) => {
  place.addEventListener("click", () => {
    if (citiesSelected.includes(place)) {
      citiesSelected = citiesSelected.filter((p) => p !== place);
    } else if (citiesSelected.length < Number(elements.quantityTournament.value)) {
      citiesSelected.push(place);
    } else {
      alert("Trop de villes selectionnées");
    }

    ensureTownChecked();
  });
};
// END - Selection des villes

// BEGIN - Event Validation

const signUpValidationEvent = (event) => {
  event.preventDefault();
  
  if (isFormValid()) {
    elements.modal.form.style.display = "none";
  } else {
    alert("Veuillez finir de compléter le formulaire svp");
  }
};
// END - Event Validation

const createFormEventsListeners = () => {
  formListeners("firstName", isValidName);
  formListeners("lastName", isValidSurname);
  formListeners("email", isValidEmail);
  formListeners("birthDate", isValidBirthdate);
  formListeners("quantityTournament", isValidNumber);

  elements.checkCity.forEach(townSelector);
  elements.signUp.addEventListener("click", signUpValidationEvent);
};

createFormEventsListeners();


