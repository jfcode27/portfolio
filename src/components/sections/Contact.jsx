import React from "react";
import styled from "styled-components";

const StyledContact = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--royal-blue);
    font-family: var(--mono-font);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact {
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
    margin-top: 50px;
  }

  p{
    margin-bottom: 50px;
  }
`;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h2 className="numbered-heading overline">Want to cantact me?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        My inbox is alway open for new work opportunities. If you want to 
        work with me, feel free to reach out.
      </p>

      <a className="contact" href="mailto:francojeremy23@gmail.com">
        E-mail me!
      </a>
    </StyledContact>
  );
};

export default Contact;
