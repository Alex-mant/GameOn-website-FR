const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

/* REGEXP */
let nbr = new RegExp(/^[0-9]+$/);
let eMailFormat = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
/* REGEXP */

firstName.addEventListener("change", function() {
    let first = document.querySelector(".fName");
    if (this.value.length > 2) {
        first.style.display = "none";
    }
    else {    
        first.style.display = "block";
    }
});