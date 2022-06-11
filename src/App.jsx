import React from "react";
import Construction from "./components/Construction";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Socials from "./components/Socials";
import { Contact, Featured, Intro, WhoIm } from "./components/sections";
import Email from "./components/Email";
import Footer from "./components/Footer";

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
          <Featured />
          <Contact />
          <Footer />
        </Main>
      </div>
    </>
  );
};

export default App;
