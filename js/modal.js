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
const formData = document.querySelectorAll(".form-data");
const modalClose = document.querySelector(".close");

const formFirst = document.getElementById('firstName'); // take firstname from form
const formLast = document.getElementById('lastName'); // take lastname from form
const formEmail = document.getElementById('emailAddress'); // take email from form
const formBirthdate = document.getElementById('birthDate'); // take birthdate from form
const formQuantity = document.getElementById('pastTournament'); // take quantity of number of tournament participated from form
let formLocationCheck = document.querySelector('input[name="location"]:checked'); // take location of next tournament input with let
const formTermsConditions = document.getElementById('checkbox1'); // take terms conditions input checkbox

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let formIsValid; // initialize form validation;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Ajoute un message d'erreur
function addFormErrorMessage(element, errorMessage){
  console.log(element);
  element.parentElement.setAttribute('data-error', errorMessage);
  element.parentElement.setAttribute('data-error-visible', 'true');
}

// Supprime le message d'erreur
function removeFormErrorMessage(element){ 
  element.parentElement.removeAttribute('data-error');
  element.parentElement.removeAttribute('data-error-visible');
}


/*
form.addEventListener('submit', (event) => {
  event.preventDefault();
})
*/

function formFirstIsValid(){
  if(formFirst.value == "" || formFirst.value.length < 2){
    addFormErrorMessage(formFirst, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formFirst);
  }
}

function formLastIsValid(){
  if(formLast.value == "" || formLast.value.length < 2){
    addFormErrorMessage(formLast, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLast);
  }
}

function formEmailIsValid(){
  if (regexEmail.test(formEmail.value) != true){
    addFormErrorMessage(formEmail, "Veuillez entrer une adresse email valide.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formEmail);
  }
}

function formBirthdateIsValid(){
  if(formBirthdate.value == ""){
    addFormErrorMessage(formBirthdate, "Vous devez entrer votre date de naissance.");
    formIsValid = false;
  } else {
    removeFormErrorMessage(formBirthdate);
  }
}

function formQuantityIsValid(){
  if(formQuantity.value == "" || isNaN(formQuantity.value)){
    addFormErrorMessage(formQuantity, "Veuillez entrer un nombre.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formQuantity);
  }
}

function formLocationIsValid(){
  if(formLocationCheck == null){
    addFormErrorMessage(formLocationCheck, "Vous devez choisir une option.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formLocationCheck);
  }
}

function formTermsConditionsIsValid(){
  if(!formTermsConditions.checked){
    addFormErrorMessage(formTermsConditions, "Vous devez vérifier que vous acceptez les termes et conditions.");
    formIsValid = false;
  } else{
    removeFormErrorMessage(formTermsConditions);
  }
}

// Valide toutes les informations avant envoi
function validate(event){
  //Prevent to submit
  event.preventDefault();

  // Refresh form location check each time we submit
  formLocationCheck = document.querySelector('input[name="location"]:checked');
  formIsValid = true;

  formFirstIsValid();
  formLastIsValid();
  formEmailIsValid();
  formBirthdateIsValid();
  formQuantityIsValid();
  formLocationIsValid();
  formTermsConditionsIsValid();

  if(formIsValid){
    console.log("Inscription envoyée");
    return true;
  } else{
    console.error("Attention! Une erreur s'est produite");
    return false;
  }
}