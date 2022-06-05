import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 150px;

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 25px;
  }

  &.fillHeight {
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 50px;
    }
    @media (max-width: 480px) {
      padding: 0 25px;
    }
  }
`;

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
