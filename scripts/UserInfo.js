export default class UserInfo {
    constructor({ data }) {
        this._name = document.querySelector(data.name);
        this._aboutMe = document.querySelector(data.aboutMe);

    }

    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            aboutMe: this._aboutMe.textContent
        }
        return userData;
    }

    setUserInfo(userData) {
        this._name.textContent = userData.userName;
        this._aboutMe.textContent = userData.userAboutMe;
    }
}