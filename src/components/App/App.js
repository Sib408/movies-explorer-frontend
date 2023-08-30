/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Route, Routes, Navigate } from "react-router-dom";
import CurrentUserContext from "../../utils/context/CurrentUserContext";

import './App.css';


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

function App() {
  const navigate = useNavigate();
  const location = useLocation();


  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileMessage, setProfileMessage] = useState('');

  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoErrorOpen, setIsInfoErrorOpen] = useState(false);
  const [textInfoError, setTextInfoError] = useState('');


  useEffect(() => {
    handleTokenCheck();
  }, [loggedIn])

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((movies) => {
          const mySavedMovies = movies.filter((movie) => movie.owner === currentUser._id);
          setSavedMovies(mySavedMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [currentUser._id, setSavedMovies]);



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
    navigate('/');

  };
  function closeInfoError() {
    setIsInfoErrorOpen(false);
    setTextInfoError('')
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

              !loggedIn ? (
                <Register onRegister={handleRegister}
                  registerError={registerError} />
              ) : (
                <Navigate to="/" replace />
              )


            } />


            <Route exact path={'/signin'} element={

              !loggedIn
                ? (
                  <Login onLogin={handleLogin}
                    loginError={loginError} />
                )
                : (
                  <Navigate to="/" replace />
                )

            } />


            <Route exact path={'/movies'} element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    loggedIn={loggedIn} />
                  <Movies
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    setIsInfoErrorOpen={setIsInfoErrorOpen}
                    setTextInfoError={setTextInfoError}
                    isInfoErrorOpen={isInfoErrorOpen}
                    closeInfoError={closeInfoError}
                    textInfoError={textInfoError}
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
                    setSavedMovies={setSavedMovies}
                    setIsInfoErrorOpen={setIsInfoErrorOpen}
                    setTextInfoError={setTextInfoError}
                    isInfoErrorOpen={isInfoErrorOpen}
                    closeInfoError={closeInfoError}
                    textInfoError={textInfoError}
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
