

export const MAIN_API = {
  // baseUrl: 'https://sib408.movies.nomoredomains.xyz',
  baseUrl: 'http://localhost:3001',
  headers: {
    authorization: 'ade24f25-d7dd-4edc-be9d-87af9f2eb31d',
    'Content-Type': 'application/json'
  }
}

export const MOVIES_API = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
}
export const MOVIE_LINK = 'https://api.nomoreparties.co';

export const SCREEN_SIZE_MOBILE = 480;
export const INITIAL_MOVIES_MOBILE = 5;
export const LOAD_MORE_TABLET_MOBILE = 2;
export const SCREEN_SIZE_TABLET = 768;
export const INITIAL_MOVIES_TABLET = 8;
export const SCREEN_SIZE_DESTOP = 1024;
export const INITIAL_MOVIES_DESTOP = 12;
export const LOAD_MORE_DESKTOP = 3;
export
  const INPUT_ERROR_NAME = {
    name: 'Имя не должно быть короче 2 букв',
    email: 'Введите корректный email',
    password: 'Пароль должен быть не короче 8 символов',
    searchMovies: 'Нужно ввести ключевое слово',
  }

export
  const ERROR_MESSAGE = {
    notFound: 'Ничего не найдено',
    tryAgainLater: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    errorRequest: 'Неверный email или пароль',
    repeatedEmail: 'Пользователь с таким email уже зарегистрирован',
  }
export
  const STORAGE_DATA_NAME = {
    userId: 'uI',
    movies: 'movies',
    searchQuery: 'sQ',
    toggleShortMovie: 'toggleSM'
  }

export const SHORT_MOVIE = 40;
