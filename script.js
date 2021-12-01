let editButton = document.querySelector(".profile__edit-button");
let page = document.querySelector(".page");
let closeButton = document.querySelector(".popup__close-button")

let popup = document.querySelector(".popup")

let formElement = document.querySelector(".popup__form")

let personInput = document.querySelector(".popup__person")
let annotationInput = document.querySelector(".popup__annotation")

let annotationProfile = document.querySelector(".profile__annotation")
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
    annotationProfile.textContent = annotationInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);