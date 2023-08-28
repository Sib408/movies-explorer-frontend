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
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(this._checkServerResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.thumbnail}`,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._checkServerResponse)
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(this._checkServerResponse)
  }


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
