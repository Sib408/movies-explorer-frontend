import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from '../ProtectedRoute/ProtecterRoute';



function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileMessage, setProfileMessage] = useState('');


  useEffect(() => {
    handleTokenCheck();
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        // setCards(cards);
      })
      .catch((err) => console.log(err));

  }, [loggedIn])

  const handleTokenCheck = (token) => {
    // const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .getContent(token)
        .getUserInfo(token)
        .then((res) => {
          if (res) {
            // setUserInfo({ email: res.email });
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
                  <Navigation />
                  <Movies />
                  <Footer />
                </>

              </ProtectedRoute>

            }>
            </Route>

            <Route exact path={'/saved-movies'} element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Navigation />
                  <SavedMovies />
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
