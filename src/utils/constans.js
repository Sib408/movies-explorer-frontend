import poster from '../images/movies_cards/pic__33words.jpg';

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
const moviesList = [
  {
    country: 'Россия',
    director: 'Наталья Климчук, Ольга Морозова',
    duration: '1ч40м',
    year: 2019,
    description: 'Школа дизайна Bang Bang Education собрала компанию из 33 современных русских дизайнеров. Все они говорят и думают по-русски и неизбежно вдохновляются тем, что вошло в наш быт, книги, практики, ритуалы, праздники, экономику, историческую память и моду. Этот альманах — поиск особенностей и границ национального восприятия красоты, желание увидеть, какие этические и эстетические ценности мы несем миру.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 1,
    nameRU: '33 слова о дизайне',
    nameEN: "33 words about design",
    like: false,
  },
  {
    country: 'Россия',
    director: 'Филипп Задорожный, Макси Шилов, Евгений Евграфов,',
    duration: '1ч48м',
    year: 2018,
    description: 'Просветительский проект и документальный фильм, о том, как современная визуальная культура вышла из 1918 года. Цель альманаха — дать системное представление о том, какой путь проделал дизайн от школы Баухаус до 2018 года.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 2,
    nameRU: '100 лет дизайна',
    nameEN: "100 years design",
  },
  {
    country: 'Франция',
    director: 'Симус Хейли, Laurent Richard, Aurélia Rouvier',
    duration: '1ч24м',
    year: 2020,
    description: 'Попытка разгадать тайну главного уличного художника планеты. Авторы ищут ответ на вопрос, что за человек скрывается за псевдонимом Бенкси: они хотят и найти Кларка Кента за маской Супермена, и одновременно провести исследование его мифа.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 3,
    nameRU: 'В погоне за Бенкси',
    nameEN: "Banksy Most Wanted",
  },
]


export default moviesList;

export const savedMoviesList = [
  {
    country: 'Россия',
    director: 'Наталья Климчук, Ольга Морозова',
    duration: '1ч40м',
    year: 2019,
    description: 'Школа дизайна Bang Bang Education собрала компанию из 33 современных русских дизайнеров. Все они говорят и думают по-русски и неизбежно вдохновляются тем, что вошло в наш быт, книги, практики, ритуалы, праздники, экономику, историческую память и моду. Этот альманах — поиск особенностей и границ национального восприятия красоты, желание увидеть, какие этические и эстетические ценности мы несем миру.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 1,
    nameRU: '33 слова о дизайне',
    nameEN: "33 words about design",
  },
  {
    country: 'Россия',
    director: 'Филипп Задорожный, Макси Шилов, Евгений Евграфов,',
    duration: '1ч48м',
    year: 2018,
    description: 'Просветительский проект и документальный фильм, о том, как современная визуальная культура вышла из 1918 года. Цель альманаха — дать системное представление о том, какой путь проделал дизайн от школы Баухаус до 2018 года.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 2,
    nameRU: '100 лет дизайна',
    nameEN: "100 years design",
  },
  {
    country: 'Франция',
    director: 'Симус Хейли, Laurent Richard, Aurélia Rouvier',
    duration: '1ч24м',
    year: 2020,
    description: 'Попытка разгадать тайну главного уличного художника планеты. Авторы ищут ответ на вопрос, что за человек скрывается за псевдонимом Бенкси: они хотят и найти Кларка Кента за маской Супермена, и одновременно провести исследование его мифа.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 3,
    nameRU: 'В погоне за Бенкси',
    nameEN: "Banksy Most Wanted",
  }
]

