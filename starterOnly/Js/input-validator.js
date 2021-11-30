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
    if (validationFunction(element.value)) {
      setSuccessOnForm_(element, errorElement);
    } else {
      setErrorOnForm_(element, errorElement);
    }
  });
};
