const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button')
const popupForm = document.querySelector('.popup__form')
const elementLike = document.querySelector('.element__like')
const popupContainer = document.querySelector('.popup__container')
const addButton = document.querySelector('.profile__add-button')
const placeContainElements = document.querySelector('.elements')
const placeElement = document.querySelectorAll('.element')

const templateEditButton = document.querySelector('#edit-profile');
const templateNewPlace = document.querySelector('#new-place');

let personInput = document.querySelector('#person')
let aboutMeInput = document.querySelector('#about-me')
let aboutMeProfile = document.querySelector('.profile__about-me')
let personProfile = document.querySelector('.profile__person')
let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// создание template элемента edit-button 
const createPopupEditButton = () => {
  popupContainer.append(templateEditButton.content);
  popup.classList.add('popup_opend');
  // Отправка формы edit-button
  const formSubmitEditProfile  = (evt) => {
    evt.preventDefault(); 
    personProfile.textContent = personInput.value;
    aboutMeProfile.textContent = aboutMeInput.value;
    closePopup();
    popup.removeChild(templateEditButton);
  }
  popupForm.addEventListener('submit', formSubmitEditProfile);
}
editButton.addEventListener('click', createPopupEditButton);

// создание template элемента new-place
const createPopupNewPlace = () => {
  popupContainer.append(templateNewPlace.content)
  popup.classList.add('popup_opend');
  // Отправка формы new-place
  const formSubmitNewPlace  = (evt) => {
    evt.preventDefault(); 
    closePopup();
    popup.removeChild(templateNewPlace);
  }
  popupForm.addEventListener('submit', formSubmitNewPlace);
}
addButton.addEventListener('click', createPopupNewPlace); 

// Закрытие popup 
const closePopup = () => { 
  popup.classList.remove('popup_opend')
}
closeButton.addEventListener('click', closePopup);




// 1. Шесть карточек «из коробки»


// Загрузка place в массив
const loadInitialCards = () => {
    const cards = document.querySelectorAll('.element') 
    const linkCards = document.querySelectorAll('.element__image')
    const nameCards = document.querySelectorAll('.element__title')
    for (i = 0; i < cards.length; i++) {
        nameCards[i].textContent = initialCards[i].name;
        linkCards[i].src = initialCards[i].link
    }
}
loadInitialCards();

// 2. Форма добавления карточки 





// 4. Лайк карточки
const likes = document.querySelectorAll('.element__like');

likes.forEach.call(likes, function(evt){
    evt.addEventListener('click', function(evt){
        evt.target.classList.toggle('element__like_active');
    })
})

// Открытие popup'a с картинкой

const images = document.querySelectorAll('.element__image');
let popupImage = document.querySelector('#zoom-image').content

images.forEach.call(images, function(evt){
  evt.addEventListener('click', function(evt){
    document.body.append(popupImage) // нужно создать попап и
    // добавлять по ноебходимости
  })
})

// evt.target.src