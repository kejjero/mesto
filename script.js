let editButton = document.querySelector(".profile__edit-button");
let page = document.querySelector(".page");
let closeButton = document.querySelector(".popup__close-button")

let popup = document.querySelector(".popup")

let formElement = document.querySelector(".popup__form")

let personInput = document.querySelector(".popup__person")
let aboutMeInput = document.querySelector(".popup__about-me")

let aboutMeProfile = document.querySelector(".profile__about-me")
let personProfile = document.querySelector(".profile__person")

editButton.addEventListener("click", function () {
    createPopup();
});
function createPopup() {
    popup.classList.add("popup_opend");
}


closeButton.addEventListener("click", function () {
    closePopup();
});
function closePopup () {
    popup.classList.remove("popup_opend");
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

// Поставить конст где это требуется
// Исправить аннотацию на "О себе" about-me