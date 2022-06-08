import React from "react";
import styled from "styled-components";
import Links from "./Links";

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--secondary-text);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--mono-font);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: var(--secondary-text);
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--royal-blue);
    }
  }
`;

const Email = () => {
  return (
    <Links orientation="right">
      <StyledEmail>
        <a href="mailto:francojeremy23@gmail.com">francojeremy23@gmail.com</a>
      </StyledEmail>
    </Links>
  );
};

export default Email;
