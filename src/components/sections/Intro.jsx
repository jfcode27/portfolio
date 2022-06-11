import React from "react";
import styled from "styled-components";

const StyledIntro = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
      margin: 0px 0px 30px 4px;
      color: var(--royal-blue);
      font-family: var(--mono-font);
      font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
      font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--secondary-text);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .button{
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
    margin-top: 50px;
  }
`;

const Intro = () => {
  return(
    <StyledIntro >
        <h1>Hello, my name is</h1>
        <h2 className="big-heading">Jeremy Franco</h2>
        <h3 className="big-heading">Frontend Developer</h3>
        <p>I'm a software engineering student based in Mexico. I'm currently engaged in
        Frontend Development, I really like to build interfaces based on ui/ux design.
        </p>
        <a href="" className="button">Get In Touch</a>
    </StyledIntro>
  );
};

export default Intro;
