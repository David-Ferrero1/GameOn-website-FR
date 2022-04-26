function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".form-data");

const formFirst = document.getElementById("firstName"); // take firstname from form
const formLast = document.getElementById("lastName"); // take lastname from form
const formEmail = document.getElementById("emailAddress"); // take email from form
const formBirthdate = document.getElementById("birthDate"); // take birthdate from form
const formQuantity = document.getElementById("pastTournament"); // take quantity of number of tournament participated from form
let formLocationCheck = document.querySelector(
  "input[name='location']:checked"
); // take location of next tournament input with let
let formLocations = document.querySelector(  
  "input[name='location']"
);
const formTermsConditions = document.getElementById("checkbox1"); // take terms conditions input checkbox
const modalBody = document.querySelector(".modal-body");
const modalSuccess = document.querySelector(".modal-success");
const modalCloseSucess = document.querySelector(".modal-success-close");

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexName = /^[a-z-A-Z ,.'-]+$/;

let formIsValid; // initialiser la validation du formulaire;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", function () {
  closeModal();
  if (modalbg.classList.contains("formSubmitted")) {
    restartModal();
  }
});

modalCloseSucess.addEventListener("click", function () {
  closeModal();
  restartModal();
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Ajout fonction de restart du formulaire
function restartModal() {
  modalbg.classList.remove("formSubmitted");
  modalBody.style.opacity = "1";
  modalSuccess.style.display = "none";
  formFirst.value = "";
  formLast.value = "";
  formEmail.value = "";
  formBirthdate.value = "";
  formQuantity.value = "";
  formLocationCheck.checked = false;
}

// Ajoute un message d'erreur
function addFormErrorMessage(element, errorMessage) {
  if (element != undefined || element != null) {
    element.parentElement.setAttribute("data-error", errorMessage);
    element.parentElement.setAttribute("data-error-visible", "true");
  }
}

// Supprime le message d'erreur
function removeFormErrorMessage(element) {
  element.parentElement.removeAttribute("data-error");
  element.parentElement.removeAttribute("data-error-visible");
}

// Vérifier la validité du prénom
function formFirstIsValid() {
  if (formFirst.value.trim() == "" || formFirst.value.trim().length < 2) {
    addFormErrorMessage(
      formFirst,
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    formIsValid = false;
  } else {
    removeFormErrorMessage(formFirst);
  }
}

// Vérifier la validité du nom
function formLastIsValid() {
  if (formLast.value.trim() == "" || formLast.value.trim().length < 2) {
    addFormErrorMessage(
      formLast,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    formIsValid = false;
  } else {
    removeFormErrorMessage(formLast);
  }
}

// Vérifier la validité de l'email
function formEmailIsValid() {
  if (regexEmail.test(formEmail.value) != true) {
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formEmail);
  }
}

// Vérifier la validité de la date de naissance
function formBirthdateIsValid() {
  if (formBirthdate.value == "") {
    addFormErrorMessage(
      formBirthdate,
      "Vous devez entrer votre date de naissance."
    );
    formIsValid = false;
  } else if (Date.parse(formBirthdate.value) == NaN) { // autre solution isNaN(Date.parse(formBirthdate.value))
    addFormErrorMessage(
      formBirthdate,
      "Vous devez entrer une date de naissance valide."
    );
    formIsValid = false;
  } else if (Date.parse(formBirthdate.value) > Date.now()) {
    addFormErrorMessage(
      formBirthdate,
      "Vous devez entrer une date de naissance valide."
    );
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}

// Vérifier la validité du nombre de partie
function formQuantityIsValid() {
  if (formQuantity.value == "" || isNaN(formQuantity.value)) {
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formQuantity);
  }
}

// Vérifier la validité du lieu de l'évenement souhaité
function formLocationIsValid() {
  if (formLocationCheck == null || formLocationCheck == undefined) {
    addFormErrorMessage(formLocations, "Vous devez choisir une option.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formLocationCheck);
  }
}

// Vérifier que les conditions sont bien cochés
function formTermsConditionsIsValid() {
  if (!formTermsConditions.checked) {
    addFormErrorMessage(
      formTermsConditions,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    formIsValid = false;
  } else {
    removeFormErrorMessage(formTermsConditions);
  }
}

// Valide toutes les informations avant envoi
function validate(event) {
  //Prevent to submit
  event.preventDefault();

  formLocationCheck = document.querySelector('input[name="location"]:checked');
  formIsValid = true;

  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  if (formIsValid) {
    modalbg.classList.add("formSubmitted");
    modalBody.style.opacity = "0";
    modalSuccess.style.display = "flex";
    return true;
  } else {
    return false;
  }
}
