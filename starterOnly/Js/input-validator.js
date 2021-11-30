const borderStyleChange_ = (style) => (element) => (element.style.border = style);
const borderStyleOnSuccess_ = borderStyleChange_("2px solid rgb(146, 239, 155)");
const borderStyleOnError_ = borderStyleChange_("2px solid rgb(239, 146, 146)");

const errorStyleChange_ = (style) => (element) => (element.style.display = style);
const errorStyleOnSuccess_ = errorStyleChange_("none");
const errorStyleOnFail_ = errorStyleChange_("block");

const setSuccessOnForm_ = (htmlElement, errorElement) => {
  borderStyleOnSuccess_(htmlElement);
  errorStyleOnSuccess_(errorElement);
};

const setErrorOnForm_ = (htmlElement, errorElement) => {
  borderStyleOnError_(htmlElement);
  errorStyleOnFail_(errorElement);
};


const formListeners = (elementType, validationFunction) => {
  const element = elements[elementType];
  const errorElement = elements.error[elementType];
 

  element.addEventListener("blur", () => {
    const submitButtonEnabled = () => {
      const directValidations = [
        isValidName(elements.firstName.value),
        isValidSurname(elements.lastName.value),
        isValidEmail(elements.email.value),
        isValidBirthdate(elements.birthDate.value),
        isValidNumber(elements.quantityTournament.value),
      ];
      if (!directValidations.includes(false)){
        const submitButton = document.querySelector(".btn-submit")
        submitButton.style.backgroundColor = "#fe142f";
        submitButton.disabled = false;
      }
    }

    if (validationFunction(element.value)) {
      setSuccessOnForm_(element, errorElement);
      submitButtonEnabled();
      

    } else {
      setErrorOnForm_(element, errorElement);
      document.querySelector(".btn-submit").disabled = true;
      
    }
  });
};
