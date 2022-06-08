import React from "react";
import styled from "styled-components";

import { Jeremy } from "../../img";

const StyledWhoIm = styled.section`
  max-width: 900px;

  .info {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  color: var(--secondary-text);
  ul.skills {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--mono-font);
      font-size: var(--fz-xs);

      &:before {
        content: "➪";
        position: absolute;
        left: 0;
        color: var(--royal-blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledImage = styled.div`
  position: relative;
  max-width: 300px;


  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .cover {
    box-shadow: 0 10px 30px -15px var(--royal-tint);
    transition: var(--transition);
    height: 400px;

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--royal-tint);
    }
    display: block;
    position: relative;
    border-radius: var(--border-radius);
    background-color: var(--royal-blue);

    &:hover,
    &:focus {
      background-color: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      width: 100%;
      height: 100%;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--royal-blue);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const WhoIm = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Dart",
    "Swift",
    "React",
    "Flutter",
    "NodeJS",
  ];

  return (
    <StyledWhoIm id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="info">
        <StyledText>
          <div>
            <p>
              My name is Jeremy and I am a frontend developer. Currently I
              program interfaces for the web and mobile apps. I am learning more
              about backend and mobile development and my goal is to become a
              full-stack.
            </p>
            <p>Technologies I currently use:</p>
          </div>
          <ul className="skills">
            {skills &&
              skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledImage>
          <div className="cover">
            <img className="img" src={Jeremy} alt="Jeremy" />
          </div>
        </StyledImage>
      </div>
    </StyledWhoIm>
  );
};

export default WhoIm;
