// Issue #1

/*  Ouverture Modal */
openModal();
/* Fermeture Modal  */
closeModal();

// Issue #2,#3 et #4

/*  Verifie les champs du formulaire et applique message d'erreur ou confirmation.  */
/* Verificateur(champsDuFormulaire, RegularExpression, messageErreur, clé de l'objet de stockage )*/
isValidFormFields(elements.firstName, regExpName, elements.error.firstName, "firstName");
isValidFormFields(elements.lastName, regExpLastName, elements.error.lastName, "lastName");
isValidFormFields(elements.email, regExpEmail, elements.error.email, "email");
isValidFormFields(elements.birthDate, regExpBirthdate, elements.error.birthDate, "birthDate");
isValidFormFields(elements.quantityTournament, regExpNumber, elements.error.quantityTournament, "quantityTournament");

/* Bouton d'envoi formulaire */
updateSubmitButton();
eventListenerSubmitButton();
