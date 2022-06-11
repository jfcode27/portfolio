import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { navLinks } from "../config";

const StyledHamburger = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 15px;
  margin-right: -15px;
  background-color: transparent;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  z-index: 10;

  .ham-container {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .hamburger {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--royal-blue);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--royal-blue);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `100%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
    menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `100%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledSidebar = styled.aside`
  display: none;
  
  @media (max-width: 768px) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  padding: 50px 10px;
  width: min(75vw, 400px);
  background-color: var(--background);
  box-shadow: -10px 0px 30px -15px var(--royal-tint);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  transition: var(--transition);
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: var(--main-text);
    font-family: var(--mono-font);
    text-align: center;
  }

  ol{
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li{
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--royal-blue);
        font-size: var(--fz-sm);
      }
    }

    a {
      text-decoration: none;
      color: var(--secondary-text);
      width: 100%;
      padding: 3px 20px 20px;
      transition: var(--transition);

      &:hover {
          color: var(--royal-blue);
        }
    }
  }

  .resume-button {
    color: var(--royal-blue);
    background-color: transparent;
    border: 1px solid var(--royal-blue);
    border-radius: var(--border-radius);
    padding: 18px 50px;
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
    font-size: var(--fz-xs);
    width: max-content;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setMenuOpen(false);
    document.getElementById({url}).scrollIntoView({behavior: "smooth"});
  };
  return (
    <>
    <Helmet>
      <body className={menuOpen ? "blur" : ""} />
    </Helmet>
    <StyledHamburger
    onClick={toggleMenu}
    menuOpen={menuOpen}
    >
      <div className=".ham-contianer">
        <div className="hamburger"></div>
      </div>
    </StyledHamburger>
    <StyledSidebar menuOpen={menuOpen}>
      <nav>
      <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url} onClick={() => handleScroll()}>{name}</Link>
                </li>
              ))}
          </ol>
          <a href="/resume.pdf" className="resume-button">
              Resume
            </a>
      </nav>
      </StyledSidebar>
    </>
  );
};

export default Menu;
