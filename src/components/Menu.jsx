import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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
      width: var(--hamburger-width);
      top: -10px;
    }
    &:after {
      width: 100%;
      bottom: -10px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = () => {
  return (
    <StyledHamburger>
      <div className=".ham-contianer">
        <div className="hamburger"></div>
      </div>
    </StyledHamburger>
  );
};

export default Menu;
