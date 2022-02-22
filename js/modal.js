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

function validate(event){
  //Anti refresh
  event.preventDefault();

  const formFirst = document.getElementById('firstName'); // Get firstname from form
  const formLast = document.getElementById('lastName'); // Get lastname from form
  const formEmail = document.getElementById('emailAddress'); // Get email from form
  const formBirthdate = document.getElementById('birthDate'); // Get birthdate from form
  const formQuantity = document.getElementById('pastTournament'); // Get quantity of number of tournament participated from form
  const formLocation = document.querySelector('input[name="location"]:checked'); // Get location of next tournament input radio check
  const formTermsConditions = document.getElementById('checkbox1'); // Get terms conditions input checkbox

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(formFirst.value == "" || formFirst.value.length < 2){
    console.log('Problème firstName');
    return false;
  }

  if(formLast.value == "" || formLast.value.length < 2){
    console.log('Problème lastname');
    return false;
  }

  if (regexEmail.test(formEmail.value) != true){
    console.log('Problème adresse email');
    return false;
  }

  if(isNaN(formQuantity.value)){
    console.log("Problème quantité tournois n'est pas un nombre");
    return false;
  }

  if(formLocation == null){
    console.log('Problème aucune location est cochée');
    return false;
  }

  if(!formTermsConditions.checked){
    console.log('Problème la case conditions générales est non cochée');
    return false;
  }

  console.log("Inscription envoyée");
  return true;
}