/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import CurrentUserContext from "../../utils/context/CurrentUserContext";
import shortsFilter from '../../utils/shortsFilter'
import './App.css';
import useCurrentWidth from '../../hooks/useCurrentWidth';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotfound";
import Navigation from '../Navigation/Navigation';
import ProtectedRoute from '../ProtectedRoute/ProtecterRoute';

import { mainApi } from "../../utils/MainApi";
// import { moviesApi } from "../../utils/MoviesApi";
import moviesApi from "../../utils/MoviesApi";
import {
  SCREEN_SIZE_MOBILE,
  INITIAL_MOVIES_MOBILE,
  LOAD_MORE_TABLET_MOBILE,
  SCREEN_SIZE_TABLET,
  INITIAL_MOVIES_TABLET,
  SCREEN_SIZE_DESTOP,
  INITIAL_MOVIES_DESTOP,
  LOAD_MORE_DESKTOP
} from '../../utils/constans';



function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const width = useCurrentWidth();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileMessage, setProfileMessage] = useState('');

  //все фильмы - по умолчанию пустой массив
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [firstMovies, setFirstMovies] = useState(0);
  const [moreMovies, setMoreMovies] = useState(0);

  // //фильмы из api, сохраненные
  const [savedMovies, setSavedMovies] = useState([]);

  const [searchStatus, setSearchStatus] = useState('');
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [request, setRequest] = useState('');
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moreLoadingButton, setMoreLoadingButton] = useState(false);

  // useEffect(() => {
  //   handleTokenCheck();
  // }, [loggedIn])

  // useEffect(() => {
  //   handleTokenCheck();

  //   Promise.all([moviesApi.getMovies(), mainApi.getUserInfo()])
  //     .then(([movies, userInfo]) => {
  //       setCurrentUser(userInfo);
  //       setInitialMovies(movies);
  //     })
  //     .catch((err) => console.log(err));
  // }, [loggedIn])


  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('moviesStorage')) {
      const initialSearch = JSON.parse(localStorage.getItem('moviesStorage'));
      const searchResult = shortsFilter(initialSearch, request, checkboxStatus);
      // const savedMoviesInStorage = JSON.parse(localStorage.getItem("savedMovies"));

      //setSavedMovies(savedMoviesInStorage);
      setFilteredMovies(searchResult);
      setIsSearchDone(true);
    }
  }, [currentUser])

  //сохраненные фильмы
  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((res) => {
          const findSavedMovies = res.filter((m) => m.owner._id === currentUser._id)
          localStorage.setItem("savedMovies", JSON.stringify(findSavedMovies));
          setSavedMovies(findSavedMovies);
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn])

  useEffect(() => {
    handleTokenCheck();
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));

  }, [loggedIn])


  // useEffect(() => {
  //   handleTokenCheck();
  //   moviesApi
  //     .getMovies()
  //     .then((movies) => {
  //       setMovies(movies);
  //     })
  //     .catch((err) => console.log(err));

  // }, [loggedIn])


  const handleTokenCheck = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            navigate(location)
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function handleRegister(user) {
    mainApi
      .register(user)
      .then(() => {
        handleLogin({
          email: user.email,
          password: user.password
        });
        console.log('данные есть');
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setRegisterError('Пользователь с таким email уже существует');
        }
        if (err === 'Ошибка: 500') {
          setRegisterError('Ошибка сервера');
        }
        else {
          setRegisterError('При регистрации пользователя произошла ошибка');
        }
      });
  }

  function handleLogin(user) {
    return mainApi
      .login(user)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setCurrentUser(res);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {

        if (err === 'Ошибка: 401') {
          setLoginError('Неправильный логин или пароль');
        }
        if (err === 'Ошибка: 500') {
          setLoginError('Ошибка сервера');
        }
        else {
          setLoginError('При авторизации пользователя произошла ошибка');
        }
      })
  }

  function handleUpdateUser(user) {
    // const token = localStorage.getItem('jwt');
    mainApi
      .updateUserInfo(user)
      .then((updateUser) => {
        setLoggedIn(true);
        setCurrentUser(updateUser);
        localStorage.setItem('name', updateUser.name);
        localStorage.setItem('email', updateUser.email);
        setProfileMessage('Профиль успешно обновлен!');
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setProfileMessage('Пользователь с таким email уже существует');
        } else {
          setProfileMessage('При обновлении профиля произошла ошибка');
        }
      })
  }

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    // localStorage.removeItem('jwt');
    // setCurrentUser('');
    navigate('/');
    console.log(localStorage, 'localstorage')
  };


  // Preloader
  function startLoading() {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  }

  //поиск фильмов
  function handleSearchMovie(request, checkboxStatus) {
    startLoading();
    setRenderedMovies([]);
    setRequest(request);
    setCheckboxStatus(checkboxStatus);

    const initialMoviesInLocalStorage = JSON.parse(localStorage.getItem('initialMovies'));

    if (!initialMoviesInLocalStorage) {
      setLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setInitialMovies(movies);
          localStorage.setItem('initialMovies', JSON.stringify(movies));
        })
        .catch(() => {
          setSearchStatus('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      setInitialMovies(initialMoviesInLocalStorage);
    }
  }

  useEffect(() => {
    if (initialMovies.length > 0) {
      const moviesStorage = shortsFilter(initialMovies, request, checkboxStatus);

      localStorage.setItem('moviesStorage', JSON.stringify(moviesStorage));
      localStorage.setItem('request', request);
      localStorage.setItem('checkboxStatus', checkboxStatus);

      setFilteredMovies(moviesStorage);
      setIsSearchDone(true);
    }
  }, [initialMovies, request, checkboxStatus]);

  //отображение карточек
  useEffect(() => {
    if (renderedMovies.length === filteredMovies.length) {
      setMoreLoadingButton(false);
    }
  }, [renderedMovies, filteredMovies]);


  //сохранить фильм
  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((res) => {
        const updatedSavedMovies = [...savedMovies, { ...res, id: res.movieId }];
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch(err => console.log(err));
  };

  //удалить фильм из библиотеки
  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(m => m._id !== movie._id)
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch(err => console.log(err))
  };

  //показать карточки, если остались еще в хранилище
  useEffect(() => {
    if (width <= SCREEN_SIZE_MOBILE) {
      setFirstMovies(INITIAL_MOVIES_MOBILE)
      setMoreMovies(LOAD_MORE_TABLET_MOBILE)
    } else if (width <= SCREEN_SIZE_TABLET) {
      setFirstMovies(INITIAL_MOVIES_TABLET)
      setMoreMovies(LOAD_MORE_TABLET_MOBILE)
    } else if (width > SCREEN_SIZE_DESTOP) {
      setFirstMovies(INITIAL_MOVIES_DESTOP)
      setMoreMovies(LOAD_MORE_DESKTOP)
    }
  }, [width])

  useEffect(() => {
    if (filteredMovies.length > 0) {
      if (filteredMovies.length > firstMovies) {
        setRenderedMovies(filteredMovies.slice(0, firstMovies));
        setMoreLoadingButton(true);
      } else {
        setRenderedMovies(filteredMovies);
      }
    }
  }, [filteredMovies, firstMovies]);

  function renderMovies() {
    setRenderedMovies((previousCount) => filteredMovies.slice(0, previousCount.length + moreMovies));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">

          <Routes>

            <Route exact path={'/'} element={<>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>}>
            </Route>

            <Route exact path={'/signup'} element={
              <>
                <Register onRegister={handleRegister}
                  registerError={registerError} />
              </>
            }>
            </Route>

            <Route exact path={'/signin'} element={
              <>
                <Login onLogin={handleLogin}
                  loginError={loginError} />
              </>
            }>
            </Route>

            <Route exact path={'/movies'} element={

              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn} />
                  <Movies
                    loggedIn={loggedIn}

                    // movies={initialMovies}

                    onSearch={handleSearchMovie}
                    loading={loading}
                    isSearchDone={isSearchDone}
                    searchStatus={searchStatus}
                    renderedMovies={renderedMovies}
                    savedMovies={savedMovies}
                    onSaveMovie={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    moreLoadingButton={moreLoadingButton}
                    onRenderMovies={renderMovies}
                  />
                  <Footer />
                </>

              </ProtectedRoute>

            }>
            </Route>

            <Route exact path={'/saved-movies'} element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn} />
                  <SavedMovies
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }>

            </Route>

            <Route exact path={'/profile'} element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Navigation />
                  <Profile
                    onUpdateUser={handleUpdateUser}
                    profileMessage={profileMessage}
                    onSignOut={handleLogout} />
                </>
              </ProtectedRoute>
            }>
            </Route>

            <Route exact path={'*'} element={
              <>
                < PageNotFound />
              </>
            }>
            </Route>

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
