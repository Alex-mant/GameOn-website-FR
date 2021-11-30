const regexpValidator_ = (regexpName) => value => {
  const availableRegexps = {
    nameOrSurname: /^[a-z\-\u00C0-\u024F]{2,}$/i,
    positiveNumber: /^\d{1,}$/,
    email: /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    birthday: /^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/
  };

  if (availableRegexps[regexpName])  {
    return availableRegexps[regexpName].test(value)
  } else {
    throw new Error(`Regexp '${regexpName}' is not available`);
  } 
}

const isValidName = regexpValidator_('nameOrSurname');
const isValidSurname = regexpValidator_('nameOrSurname');

const isValidNumber = regexpValidator_('positiveNumber');
const isValidEmail = regexpValidator_('email');
const isValidBirthdate = regexpValidator_('birthday');
