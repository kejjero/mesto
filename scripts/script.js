const popup = document.querySelector('.popup')
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button')
const formElement = document.querySelector('.popup__form')
const elementLike = document.querySelector('.element__like')
const popupContainer = document.querySelector('.popup__container')
const addButton = document.querySelector('.profile__add-button')

let personInput = document.querySelector('#person')
let aboutMeInput = document.querySelector('#about-me')
let aboutMeProfile = document.querySelector('.profile__about-me')
let personProfile = document.querySelector('.profile__person')

// Изначально хотел сделать шаблон template для каждой из форм, 
// но это слишком усложняет код и проще будет написать через 2 функции  

// Создание формы popup !--- Редактировать профиль ---!
const createPopupEditButton = () => {
    popup.classList.add('popup_opend');
    popupContainer.querySelector('.popup__title').textContent = 'Редактировать профиль'; 
    personInput.value = personProfile.textContent;
    aboutMeInput.value= aboutMeProfile.textContent;
    // Отправка формы для popup Редактировать профиль
    const formSubmitEditProfile  = (evt) => {
      evt.preventDefault(); 
      personProfile.textContent = personInput.value;
      aboutMeProfile.textContent = aboutMeInput.value;
      closePopup();
  }
  formElement.addEventListener('submit', formSubmitEditProfile);
} 
editButton.addEventListener('click', createPopupEditButton);

// Создание формы popup !--- Новое место ---!
const createPopupNewPlace = () => {
  popup.classList.add('popup_opend');
  popupContainer.querySelector('.popup__title').textContent = 'Новое место'; 
  let idNamePlace = popupContainer.querySelector('#person').id = 'name-place';
  let idLinkImage = popupContainer.querySelector('#about-me').id = 'link-image';
  idNamePlace = popupContainer.querySelector('#name-place');
  idLinkImage = popupContainer.querySelector('#link-image');
  idNamePlace.name = 'name-place';
  idLinkImage.name = 'link-image';
  idNamePlace.value = ' '
  idLinkImage.value = ' '
  idNamePlace.placeholder = 'Название'
  idLinkImage.placeholder = 'Ссылка на картинку'

  // Отправка формы для popup Новое место
  const formSubmitEditProfile  = (evt) => {
    evt.preventDefault(); 
    closePopup();
  }
  formElement.addEventListener('submit', formSubmitEditProfile);
} 
addButton.addEventListener('click', createPopupNewPlace);


// Закрытие popup 
const closePopup = () => { popup.classList.remove('popup_opend')}
closeButton.addEventListener('click', closePopup);









// 1. Шесть карточек «из коробки»

// Я полностью убрал src в html, так как это лишняя загрузка
// и если мы захотим поменять базовые картинки,
// нам придется заменять их и в html и в массиве.

const initialCards = [
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