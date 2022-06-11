import React from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    color: var(--royal-blue);
    font-family: var(--mono-font);
    font-size: clamp(100px, 25vw, 200px);
    line-height: 1;
  }
  h2 {
    font-size: clamp(30px, 5vw, 50px);
    font-weight: 400;
  }
`;

const StyledButton = styled(Link)`
  color: var(--royal-blue);
  background-color: transparent;
  border: 1px solid var(--royal-blue);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
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
  margin-top: 40px;
`;

const NotFound = () => {
  return (
    <>
    <Helmet>
        <title>Not Found | Jeremy Franco</title>
    </Helmet>
    <StyledNotFound>
        <h1>404</h1>
        <h2>Page not found</h2>
        <StyledButton to="/">Go to home page</StyledButton>
    </StyledNotFound>
    </>
  );
};

export default NotFound;
