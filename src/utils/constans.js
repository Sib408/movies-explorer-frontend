import poster from '../images/movies_cards/pic__33words.jpg';
export const MAIN_API = {
  // baseUrl: 'https://sib408.movies.nomoredomains.xyz',
  baseUrl: 'http://localhost:3000',
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

  {
    country: 'Греция, Франция, Португалия, США',
    director: 'Сара Драйвер',
    duration: '1ч18м',
    year: 2017,
    description: 'История художника Жана-Мишеля Баския от первых шагов в искусстве до момента продажи своей первой картины.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 4,
    nameRU: 'Баския: Взрыв реальности',
    nameEN: "Boom for Real",
  },

  {
    country: 'Швейцария, Франция, Бельгия',
    director: 'Пьер Морат',
    duration: '1ч30м',
    year: 2015,
    description: 'Об этом сегодня мало кто помнит, но 50 лет назад простым бегунам приходилось быть бунтарями — места в этом спорте официально не было ни женщинам, ни любителям. Все, разумеется, изменили 60-е годы, время борьбы за права на всех фронтах. Начиная именно с них, «Free to run» рассказывает историю бега как историю огромного общественного движения — от романтических провокаций до создания огромной индустрии.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 5,
    nameRU: 'Бег это свобода',
    nameEN: "Free to Run",
  },

  {
    country: 'США',
    director: 'Д.В. Янг',
    duration: '1ч39м',
    year: 2019,
    description: 'Путешествие в мир нью-йоркских букинистов и коллекционеров книжных сокровищ, которые, пожалуй, отличаются от российских коллег вековыми фамильными традициями и большим видовым разнообразием. Но гораздо важнее общие черты: это не просто представители «бизнес-сообщества», это энтузиасты, знатоки, а иногда и эксцентрики, объединенные невероятным увлечением.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 6,
    nameRU: 'Книготорговцы',
    nameEN: "The Booksellers",
  },

  {
    country: 'США',
    director: 'Ромуальд Кармакар',
    duration: '1ч45м',
    year: 2017,
    description: 'Фильм-концерт по случаю 25-летия техно-сцены, состоящий из пространных рассуждений пятерых заслуженных (иначе правда не скажешь) диджеев и музыкантов. Почему Германия? Каково это — играть в Париже ночью после атаки на редакцию Charlie Hebdo? Почему именно техно создает резонанс, который объединяет таких независимых и немного несчастных в своем одиночестве европейцев?',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 7,
    nameRU: 'Когда я думаю о Германии ночью',
    nameEN: "Denk ich an Deutschland in der Nacht",
  },

  {
    country: 'США',
    director: 'Джим Джармуш',
    duration: '1ч48м',
    year: 2016,
    description: 'История группы The Stooges, одной из величайших рок-н-ролл групп всех времен. Появившись в Анн-Арбор (Мичиган) в эпоху контркультурной революции, яркий и агрессивный рок-н-ролл The Stooges перевернул музыкальный мир конца 60-х. Обрушив на аудиторию замес рока, блюза, R&B и джаза, группа дала начало тому, что впоследствии назовут панком и альтернативным роком.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 8,
    nameRU: 'КGimme Danger. История Игги и The Stooges',
    nameEN: "Gimme Danger",
  },
  {
    country: 'Швейцария, Франция, Бельгия',
    director: 'Пьер Морат',
    duration: '1ч30м',
    year: 2015,
    description: 'Об этом сегодня мало кто помнит, но 50 лет назад простым бегунам приходилось быть бунтарями — места в этом спорте официально не было ни женщинам, ни любителям. Все, разумеется, изменили 60-е годы, время борьбы за права на всех фронтах. Начиная именно с них, «Free to run» рассказывает историю бега как историю огромного общественного движения — от романтических провокаций до создания огромной индустрии.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 9,
    nameRU: 'Бег это свобода',
    nameEN: "Free to Run",
  },

  {
    country: 'США',
    director: 'Д.В. Янг',
    duration: '1ч39м',
    year: 2019,
    description: 'Путешествие в мир нью-йоркских букинистов и коллекционеров книжных сокровищ, которые, пожалуй, отличаются от российских коллег вековыми фамильными традициями и большим видовым разнообразием. Но гораздо важнее общие черты: это не просто представители «бизнес-сообщества», это энтузиасты, знатоки, а иногда и эксцентрики, объединенные невероятным увлечением.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 10,
    nameRU: 'Книготорговцы',
    nameEN: "The Booksellers",
  },

  {
    country: 'США',
    director: 'Ромуальд Кармакар',
    duration: '1ч45м',
    year: 2017,
    description: 'Фильм-концерт по случаю 25-летия техно-сцены, состоящий из пространных рассуждений пятерых заслуженных (иначе правда не скажешь) диджеев и музыкантов. Почему Германия? Каково это — играть в Париже ночью после атаки на редакцию Charlie Hebdo? Почему именно техно создает резонанс, который объединяет таких независимых и немного несчастных в своем одиночестве европейцев?',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 11,
    nameRU: 'Когда я думаю о Германии ночью',
    nameEN: "Denk ich an Deutschland in der Nacht",
  },

  {
    country: 'США',
    director: 'Джим Джармуш',
    duration: '1ч48м',
    year: 2016,
    description: 'История группы The Stooges, одной из величайших рок-н-ролл групп всех времен. Появившись в Анн-Арбор (Мичиган) в эпоху контркультурной революции, яркий и агрессивный рок-н-ролл The Stooges перевернул музыкальный мир конца 60-х. Обрушив на аудиторию замес рока, блюза, R&B и джаза, группа дала начало тому, что впоследствии назовут панком и альтернативным роком.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 12,
    nameRU: 'Gimme Danger. История Игги и The Stooges',
    nameEN: "Gimme Danger",
  },
  {
    country: 'Швейцария, Франция, Бельгия',
    director: 'Пьер Морат',
    duration: '1ч30м',
    year: 2015,
    description: 'Об этом сегодня мало кто помнит, но 50 лет назад простым бегунам приходилось быть бунтарями — места в этом спорте официально не было ни женщинам, ни любителям. Все, разумеется, изменили 60-е годы, время борьбы за права на всех фронтах. Начиная именно с них, «Free to run» рассказывает историю бега как историю огромного общественного движения — от романтических провокаций до создания огромной индустрии.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 13,
    nameRU: 'Бег это свобода',
    nameEN: "Free to Run",
  },

  {
    country: 'США',
    director: 'Д.В. Янг',
    duration: '1ч39м',
    year: 2019,
    description: 'Путешествие в мир нью-йоркских букинистов и коллекционеров книжных сокровищ, которые, пожалуй, отличаются от российских коллег вековыми фамильными традициями и большим видовым разнообразием. Но гораздо важнее общие черты: это не просто представители «бизнес-сообщества», это энтузиасты, знатоки, а иногда и эксцентрики, объединенные невероятным увлечением.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 14,
    nameRU: 'Книготорговцы',
    nameEN: "The Booksellers",
  },

  {
    country: 'США',
    director: 'Ромуальд Кармакар',
    duration: '1ч45м',
    year: 2017,
    description: 'Фильм-концерт по случаю 25-летия техно-сцены, состоящий из пространных рассуждений пятерых заслуженных (иначе правда не скажешь) диджеев и музыкантов. Почему Германия? Каково это — играть в Париже ночью после атаки на редакцию Charlie Hebdo? Почему именно техно создает резонанс, который объединяет таких независимых и немного несчастных в своем одиночестве европейцев?',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 15,
    nameRU: 'Когда я думаю о Германии ночью',
    nameEN: "Denk ich an Deutschland in der Nacht",
  },

  {
    country: 'США',
    director: 'Джим Джармуш',
    duration: '1ч48м',
    year: 2016,
    description: 'История группы The Stooges, одной из величайших рок-н-ролл групп всех времен. Появившись в Анн-Арбор (Мичиган) в эпоху контркультурной революции, яркий и агрессивный рок-н-ролл The Stooges перевернул музыкальный мир конца 60-х. Обрушив на аудиторию замес рока, блюза, R&B и джаза, группа дала начало тому, что впоследствии назовут панком и альтернативным роком.',
    image: poster,
    trailerLink: 'https://link.ru',
    thumbnail: 'https://link.ru',
    movieId: 16,
    nameRU: 'Gimme Danger. История Игги и The Stooges',
    nameEN: "Gimme Danger",
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

