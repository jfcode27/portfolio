import React from 'react'
import Construction from './components/Construction';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Socials from './components/Socials';
import { Intro, WhoIm } from './components/sections';
import Email from './components/Email';

const App = () => {
  return (
    <>
    <Navbar />
    <Socials />
    <Email />
    <div id="content">
      <Main>
      <Intro />
      <WhoIm />
      </Main>
    </div>
    </>
  );
};

export default App;
