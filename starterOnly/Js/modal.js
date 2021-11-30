// BEGIN - DOM ELEMENTS
const elements = {
  modalForm : document.querySelector(".modal-body form"),
  modalbg: document.querySelector(".bground"),
  modalBtn: document.querySelectorAll(".modal-btn"),
  modalClosebtn: document.querySelector(".btn-close"),
  modalCross: document.querySelector(".close"),
  formData: document.querySelectorAll(".formData"),
  firstName : document.getElementById("first"),
  lastName : document.getElementById("last"),
  email : document.getElementById("email"),
  birthDate : document.getElementById("birthdate"),
  quantityTournament : document.getElementById("quantity"),
  checkCity : document.querySelectorAll(".city-location"),
  signUp : document.querySelector(".btn-submit"),
  error : {
    firstName : document.querySelector("p.error-fName"),
    lastName : document.querySelector("p.error-lName"),
    email : document.querySelector("p.error-eMail"),
    birthDate : document.querySelector("p.error-bDate"),
    city : document.querySelector("p.error-city"),
    quantityTournament : document.querySelector("p.error-qValue")
  }
};
// END - DOM ELEMENTS

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// BEGIN - launch modal event
const launchModalEvent_ = (btn) => btn.addEventListener("click", launchModal = () => {
  elements.modalbg.style.display = "block";
});
// END - launch modal event

// BEGIN - close modal form
const modalClose_ = () => {
  elements.modalbg.style.display = "none";
}
// END - close modal form

const createModalEventsListeners = () => {
  elements.modalBtn.forEach(launchModalEvent_);
  elements.modalCross.addEventListener("click", modalClose_);
  elements.modalClosebtn.addEventListener("click",modalClose_);
}

createModalEventsListeners();