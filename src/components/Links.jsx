import React from "react";
import styled from "styled-components";

const StyledLinks = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--secondary-text);

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Links = ({orientation, children}) => {
  return (
    <StyledLinks orientation={orientation}>
        {children}
    </StyledLinks>
  );
};

export default Links;
