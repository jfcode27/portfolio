import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { IconLogo } from "../img";
import { IconInstagram, IconLinkedin, IconGitHub } from "./icons";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 300px;
  }

  span {
    font-size: 3.3rem;
    font-family: var(--main-font);
    color: var(--secondary-text);
    font-weight: bold;
  }
`;

const Loading = styled.span`
  font-size: 1.5rem !important;
  font-family: var(--mono-font) !important;
  color: var(--royal-blue) !important;
  animation: loading 0.9s infinite;

  @keyframes loading {
    10% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  a {
    color: var(---text);
    width: 25px;
    height: 25px;
    text-decoration: none;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: var(--royal-blue);
    transform: translateY(-5px);
  }
`;

const Construction = () => {
  return (
    <>
      <Helmet>
        <title>Site on construction!</title>
      </Helmet>
      <Container>
        <img src={IconLogo} alt="Logo" />
        <span>Jeremy Franco</span>
        <Loading>Loading...</Loading>
        <Socials>
          <a href="https://github.com/jfcode27">
            <IconGitHub />
          </a>
          <a href="https://www.linkedin.com/in/jeremy-franco-921931217/">
            <IconLinkedin />
          </a>
          <a href="https://www.instagram.com/jeremy__franco/">
            <IconInstagram />
          </a>
        </Socials>
      </Container>
    </>
  );
};

export default Construction;
