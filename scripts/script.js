const POPUP = document.querySelector(".popup")
const EDIT_BUTTON = document.querySelector(".profile__edit-button");
const CLOSE_BUTTON = document.querySelector(".popup__close-button")
const FORM__ELEMENT = document.querySelector(".popup__form")

let personInput = document.querySelector("#person")
let aboutMeInput = document.querySelector("#about-me")
let aboutMeProfile = document.querySelector(".profile__about-me")
let personProfile = document.querySelector(".profile__person")

function createPopup() {
    POPUP.classList.add("popup_opend");
}
function closePopup () {
    POPUP.classList.remove("popup_opend");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup();
}

EDIT_BUTTON.addEventListener("click", createPopup);
CLOSE_BUTTON.addEventListener("click", closePopup);
FORM__ELEMENT.addEventListener('submit', formSubmitHandler);
