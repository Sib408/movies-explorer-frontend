import React from 'react';

import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProgect/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from "./Portfolio/Portfolio";

const Main = () => {
  return (
    <main className='main'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
