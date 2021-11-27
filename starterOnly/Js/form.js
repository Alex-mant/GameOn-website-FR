/* BEGIN - DOM ELEMENTS*/
const formElement = document.getElementById("form");
const firstNameElement = document.getElementById("first");
const lastNameElement = document.getElementById("last");
const emailElement = document.getElementById("email");
const birthDateElement = document.getElementById("birthdate");
const quantityTournamentElement = document.getElementById("quantity");
const signUpElement = document.querySelector(".btn-submit");
/* BEGIN - ERROR MESSAGE ELEMENTS */
const errorFirstNameElement = document.querySelector("p.error-fName");
const errorLastNameElement = document.querySelector("p.error-lName");
const errorEmailElement = document.querySelector("p.error-eMail");
const errorBirthDateElement = document.querySelector("p.error-bDate");
const errorCityElement = document.querySelector("p.error-city");
const errorQuantityElement = document.querySelector("p.error-qValue");
/* END - ERROR MESSAGE ELEMENTS*/
/* END - DOM ELEMENTS*/

const nameOrSurnameRegexp = /^[a-z\-\u00C0-\u024F]{2,}$/i;
const numberRegexp = /^\d{1,}$/;
const emailRegexp = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const birthdayRegexp = /^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

/* BEGIN - Function validation */
const magicValidation = (regex) => ({value}) => regex.test(value);
const isValidNameOrSurname = magicValidation(nameOrSurnameRegexp);
const isValidNumber = magicValidation(numberRegexp);
const isValidEmail = magicValidation(emailRegexp);
const isValidBirthdate = magicValidation(birthdayRegexp);
/* END - Function validation */

/* BEGIN - Event Validation */
const signUpValidationEvent_ = (event) => {
  event.preventDefault();
  const validations = [
    isValidNameOrSurname(firstNameElement),
    isValidNameOrSurname(lastNameElement),
    isValidEmail(emailElement),
    isValidBirthdate(birthDateElement),
    isValidNumber(quantityTournamentElement),
  ];

  return validations.every((validationResult) => validationResult);
};
/* END - Event Validation */