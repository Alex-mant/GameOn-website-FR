function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const changeModalDisplay = style => {
  elements.modal.background.style.display = style;
}
const launchModal = () => changeModalDisplay('block');
const closeModal = () => changeModalDisplay('none');

elements.modal.buttons.open.addEventListener("click", launchModal);
elements.modal.buttons.close.addEventListener("click", closeModal);
elements.modal.buttons.cross.addEventListener("click", closeModal);
