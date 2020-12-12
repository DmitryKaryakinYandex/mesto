export default class Api {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
      return res.json();
    }
        return Promise.reject("Произошла ошибка");
      });
  }

  getCardData() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
            return Promise.reject("Произошла ошибка");
          });
  }

  setUserData(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
          return Promise.reject("Произошла ошибка");
        });
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
       name: data.name,
        link: data.link,
        likes: data.likes,
        owner: data.owner,
        _id: data._id
      }),
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
          return Promise.reject("Произошла ошибка");
        });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
          return Promise.reject("Произошла ошибка");
      });
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Произошла ошибка");
    });
  }

  dislikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject("Произошла ошибка");
      });
  }

  setAvatarData(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.popupLinkAvatar   
    })
      }).then((res) => {
        if (res.ok) {
        return res.json();
        }
          return Promise.reject("Произошла ошибка");
        });
    }

  }