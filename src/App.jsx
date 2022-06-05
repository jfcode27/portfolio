import React from 'react'
import Construction from './components/Construction';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { Intro } from './components/sections';

const App = () => {
  return (
    <>
    <Navbar />
    <div id="content">
      <Main>
      <Intro />
      </Main>
    </div>
    </>
  );
};

export default App;
