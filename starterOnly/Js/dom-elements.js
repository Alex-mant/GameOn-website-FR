const getId = element => document.getElementById(element);
const getSelector = element => document.querySelector(element);
const getSelectorAll = element => document.querySelectorAll(element);


const elements = {
  formData: getSelectorAll(".formData"),
  firstName: getId("first"),
  lastName: getId("last"),
  email: getId("email"),
  birthDate: getId("birthdate"),
  quantityTournament: getId("quantity"),
  checkCity: getSelectorAll(".city-location"),
  signUp: getSelector(".btn-submit"),
  modal: {
    form: getSelector(".modal-body form"),
    background: getSelector(".bground"),
    buttons: {
      open: getSelector(".modal-btn"),
      close: getSelector(".btn-close"),
      cross: getSelector(".close")
    }
  },
  error: {
    firstName: getSelector("p.error-fName"),
    lastName: getSelector("p.error-lName"),
    email: getSelector("p.error-eMail"),
    birthDate: getSelector("p.error-bDate"),
    city: getSelector("p.error-city"),
    quantityTournament: getSelector("p.error-qValue"),
  },
};
