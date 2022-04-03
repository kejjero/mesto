export default class API {
    constructor( { baseUrl, headers } ) {
      this._url = baseUrl;
      this._headers = headers;
    }

    _makeRequest(promise) {
        return promise.then((res) => {
            if(res.ok) {
               return res.json();
            }
            throw 'Ошибка запроса'
        })
        .then((cards) => {
            return cards;
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // получить карточки с сервера
    getCards() {
        const promise = fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        });
        return this._makeRequest(promise)
    }

    // отправить карточку на сервер
    sendCard(name, link) {
        const promise = fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name, 
                link
            })
        });
        return this._makeRequest(promise)
    }

    getProfile() {
        const promise = fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        });
        return this._makeRequest(promise)
    }

    editProfile(name, about) {
        const promise = fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        });
        return this._makeRequest(promise)
    }

    editAvatar(avatar) {
        const promise = fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        });
        return this._makeRequest(promise)
    }

    addLike(id) {
        const promise = fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        return this._makeRequest(promise)
    }

    deleteLike(id) {
        const promise = fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        return this._makeRequest(promise)
    }

    deleteCard(id) {
        const promise = fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        return this._makeRequest(promise)
    }
}



