import { MOVIES_API } from "./constans";

export class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  register(values) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    })
      .then(this._checkServerResponse);

  };


  login(values) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      })
    })
      .then(this._checkServerResponse)
      .then((data) => {
        localStorage.setItem('jwt', data.token)
        return data;
      });
  }

  loginOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(this._checkServerResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',

    })
      .then(this._checkServerResponse);
  }

  updateUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
      .then(this._checkServerResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  postNewSavedMovie(movieData) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    } = movieData;

    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: MOVIES_API.baseUrl + image.url,
        trailerLink,
        thumbnail: MOVIES_API.baseUrl + image.formats.thumbnail.url,
        movieId: id,
        nameRU,
        nameEN,
      })
    })
      .then(this._checkServerResponse);
  };

  deleteSavedMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkServerResponse);
  };


  getContent = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',

      }
    })
      .then(this._checkServerResponse);
  }
}


export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3001',
});
