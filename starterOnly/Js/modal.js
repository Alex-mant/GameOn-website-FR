/* Issue #1 */

// Ouverture Modal
openModal();
// Fermeture Modal
closeModal();

/* Issue #2,#3 et #4 */

// Verifie les champs du formulaire et applique message d'erreur ou confirmation.

/*verificateur(champsDuFormulaire, RegularExpression, messageErreur)*/
isValidFormFields(elements.firstName, regExpName, elements.error.firstName);
isValidFormFields(elements.lastName, regExpLastName, elements.error.lastName);
isValidFormFields(elements.email, regExpEmail, elements.error.email);
isValidFormFields(elements.birthDate, regExpBirthdate, elements.error.birthDate);
isValidFormFields(elements.quantityTournament, regExpNumber, elements.error.quantityTournament);
