import React from "react";
import Helmet from "react-helmet";
import { Contact, Featured, Intro, WhoIm } from "../components/sections";

const Index = () => {
  return (
    <>
    <Helmet>
        <meta name="description" content="Jeremy Franco's personal website."/>
    </Helmet>
      <Intro />
      <WhoIm />
      <Featured />
      <Contact />
    </>
  );
};

export default Index;