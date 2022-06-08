import React from "react";
import styled from "styled-components";
import Links from "./Links";
import { IconInstagram, IconGitHub, IconLinkedin } from "./icons";

const StyledSocials = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--secondary-text);
  }

  li {
      transition: var(--transition);
      height: 46px;
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      text-decoration: none;
      color: var(--secondary-text);
      transition: var(--transition);
      position: relative;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--royal-blue);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &:hover {
        transform: translateY(-3px);
    }
  }
`;

const Socials = () => {
  return (
    <Links orientation="left">
      <StyledSocials>
        <li>
            <a href="https://github.com/jfcode27" target="_blank" rel="noreferrer">
                <IconGitHub />
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/jfcode27/" target="_blank" rel="noreferrer">
                <IconLinkedin />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/jeremy__franco/" target="_blank" rel="noreferrer">
                <IconInstagram />
            </a>
        </li>
      </StyledSocials>
    </Links>
  );
};

export default Socials;
