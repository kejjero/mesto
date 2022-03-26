export default class UserInfo {
    constructor({ data }) {
        this._person = document.querySelector(data.person);
        this._aboutMe = document.querySelector(data.aboutMe);

    }

    getUserInfo() {
        const userData = {
            person: this._person.textContent,
            aboutMe: this._aboutMe.textContent
        }
        return userData;
    }

    setUserInfo(data) {
        this._person.textContent = data.person;
        this._aboutMe.textContent = data.aboutMe;
    }
}