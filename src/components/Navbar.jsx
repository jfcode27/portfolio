import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../config";
import Menu from "./Menu";

import { IconLogo } from "../img";

const StyledNavbar = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background: rgba(23, 23, 23, 0.85);
  backdrop-filter: blur(10px);
  transition: (--transition);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    padding: 0px 40px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--secondary-text);
  font-family: var(--mono-font);
  z-index: 12;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        text-decoration: none;
        color: var(--secondary-text);
        transition: var(--transition);

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--royal-blue);
          font-size: var(--fz-xxs);
          text-align: right;
        }

        &:hover {
          color: var(--royal-blue);
        }
      }
    }
  }
  .resume-button {
    color: var(--royal-blue);
    background-color: transparent;
    border: 1px solid var(--royal-blue);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--mono-font);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--royal-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Logo = (
  <div className="logo">
    <a href="/">
      <img src={IconLogo} alt="Logo" />
    </a>
  </div>
);

const ResumeLink = (
  <a
    className="resume-button"
    href="../public/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
);

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNav>
        {Logo}
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url} onClick={() => document.getElementById({url}).scrollIntoView({behavior: "smooth"})}>{name}</Link>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </StyledLinks>
        <Menu />
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
