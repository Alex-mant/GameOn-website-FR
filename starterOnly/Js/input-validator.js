const borderStyleChange = (style) => (element) => (element.style.border = style);
const borderStyleOnSuccess = borderStyleChange("2px solid rgb(146, 239, 155)");
const borderStyleOnError = borderStyleChange("2px solid rgb(239, 146, 146)");

const errorStyleChange = (style) => (element) => (element.style.display = style);
const errorStyleOnSuccess = errorStyleChange("none");
const errorStyleOnFail = errorStyleChange("block");

const setSuccessOnForm = (htmlElement, errorElement) => {
  borderStyleOnSuccess(htmlElement);
  errorStyleOnSuccess(errorElement);
};

const setErrorOnForm = (htmlElement, errorElement) => {
  borderStyleOnError(htmlElement);
  errorStyleOnFail(errorElement);
};

const formListeners = (elementType, validationFunction) => {
  const element = elements[elementType];
  const errorElement = elements.error[elementType];

  element.addEventListener("blur", () => {
    const submitButtonEnabled = () => {
      
      if (isFormValid()) {
        const submitButton = document.querySelector(".btn-submit");
        submitButton.style.backgroundColor = "#fe142f";
        submitButton.disabled = false;
      }
    };

    if (validationFunction(element.value)) {
      setSuccessOnForm(element, errorElement);
      submitButtonEnabled();
    } else {
      setErrorOnForm(element, errorElement);
      document.querySelector(".btn-submit").disabled = true;
    }
  });
};

const isFormValid = () =>{
  const validations = [
    isValidName(elements.firstName.value),
    isValidSurname(elements.lastName.value),
    isValidEmail(elements.email.value),
    isValidBirthdate(elements.birthDate.value),
    isValidNumber(elements.quantityTournament.value),
    citiesSelected.length <= Number(elements.quantityTournament.value),
  ];

  console.log(!validations.includes(false));
  return !validations.includes(false)
};