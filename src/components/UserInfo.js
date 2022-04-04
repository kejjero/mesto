// Класс создания пользовательского профиля
export default class UserInfo {
    constructor({ data }) {
        this._person = document.querySelector(data.person);
        this._aboutMe = document.querySelector(data.aboutMe);
        this._avatar = document.querySelector(data.avatar)

    }

    // Получение информации о пользователе
    getUserInfo() {
        return {
            person: this._person.textContent,
            aboutMe: this._aboutMe.textContent,
        };
    }

    // Добавление новой информации о пользователе
    setUserInfo(name, about, avatar) {
        this._person.textContent = name;
        this._aboutMe.textContent = about;
        this._avatar.src = avatar
    }
}