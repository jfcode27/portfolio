import React from "react";
import styled from "styled-components";
import { IconLogo } from "../img";

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
    font-size: 1.5rem!important;
    font-family: var(--mono-font)!important;
    color: var(--royal-blue)!important;
    animation: loading 0.9s infinite;

    @keyframes loading {
        10%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(0);
        }
    }
        

`;

const Construction = () => {
  return (
    <>
      <Container>
        <img src={IconLogo} alt="Logo" />
        <span>Jeremy Franco</span>
        <Loading>Loading...</Loading>
      </Container>
    </>
  );
};

export default Construction;
