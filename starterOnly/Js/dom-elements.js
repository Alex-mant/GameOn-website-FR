const getId = element => document.getElementById(element);
const getSelector = element => document.querySelector(element);
const getSelectorAll = element => document.querySelectorAll(element);


const elements = {
  /*  elements.element  */
  formData: getSelectorAll(".formData"),
  firstName: getId("first"),
  lastName: getId("last"),
  email: getId("email"),
  birthDate: getId("birthdate"),
  quantityTournament: getId("quantity"),
  checkCity: getSelectorAll(".city-location"),
  termsOfUse : getSelector("#checkbox1"),
  /*  elements.modal.element  */
  modal: {
    form: getSelector(".modal-body form"),
    confirmForm : getSelector(".confirm-container"),
    background: getSelector(".bground"),
    /*  elements.modal.buttons.element  */
    buttons: {
      open: getSelector(".modal-btn"),
      close: getSelector(".btn-close"),
      cross: getSelector(".close"),
      submit: getSelector(".btn-submit"),
    },
  },
  /*  elements.error.element  */
  error: {
    firstName: getSelector("p.error-fName"),
    lastName: getSelector("p.error-lName"),
    email: getSelector("p.error-eMail"),
    birthDate: getSelector("p.error-bDate"),
    city: getSelector("p.error-city"),
    quantityTournament: getSelector("p.error-qValue"),
    termsOfUse: getSelector("span.error-termsOfUse"),
  },
};

