import React from "react";
import styled from "styled-components";
import { IconGitHub, IconInstagram, IconLinkedin } from "./icons";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--secondary-text);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    a {
      padding: 10px;
      text-decoration: none;
      color: var(--secondary-text);
      transition: var(--transition);

      &:hover,
      &:focus {
        color: var(--royal-blue);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLinks>
        <ul>
          <li>
            <a
              href="https://github.com/jfcode27"
              target="_blank"
              rel="noreferrer"
            >
              <IconGitHub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jfcode27/"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jeremy__franco/"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
        </ul>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;
