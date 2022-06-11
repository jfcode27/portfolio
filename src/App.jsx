import React from "react";
import {Routes, Route} from "react-router-dom";
import Index from "./Pages/Index";
import NotFound from "./Pages/404";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
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
          <Routes>
            <Route exact path="/" element={<Index/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Main>
      </div>
      <Footer />
    </>
  );
};

export default App;
