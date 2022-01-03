const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button')
const formElement = document.querySelector('.popup__form')

let personInput = document.querySelector('#person')
let aboutMeInput = document.querySelector('#about-me')
let aboutMeProfile = document.querySelector('.profile__about-me')
let personProfile = document.querySelector('.profile__person')

function createPopup() {
    popup.classList.add('popup_opend');
    personInput.value = personProfile.textContent;
    aboutMeInput.value= aboutMeProfile.textContent;
}
function closePopup () {
    popup.classList.remove('popup_opend');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup();
}

editButton.addEventListener('click', createPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

// Ради Бога HTML и CSS с пресвятым JavaScript'ом,
// скажите, пожалуйста, что я сдал этот проект! :) †