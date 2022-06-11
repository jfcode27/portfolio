import React from "react";
import styled from "styled-components";
import { IconGitHub } from "../icons";

const StyledProjects = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    box-shadow: 0 10px 30px -15px var(--royal-tint);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--royal-tint);
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--royal-blue);
    font-family: var(--mono-font);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--secondary-text);
    font-size: clamp(24px, 5vw, 28px);
    

    a {
        color: var(--secondary-text);
        text-decoration: none;
        transition: var(--transition);
    }
    a:hover{
        color: var(--royal-blue);
    }

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--main-text);

      a {
        position: static;
        color: var(--main-text);
        text-decoration: none;

        &:before {
          content: "";
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px var(--royal-tint);
    transition: var(--transition);
    

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--royal-tint);
    }
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-background);
    color: var(--secondary-text);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--royal-blue);
      &:hover,
      &:focus,
      &:active {
        color: var(--royal-blue);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--royal-blue) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--royal-blue);
        transition: var(--transition);
        opacity: 0.5;
      }
    }

    strong {
      color: var(--main-text);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--secondary-text);
      font-family: var(--mono-font);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--secondary-text);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--secondary-text);

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      color: var(--royal-blue);
      background-color: transparent;
      border: 1px solid var(--royal-blue);
      border-radius: var(--border-radius);
      padding: 0.75rem 1rem;
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
      margin: 10px;
    }
  }

  .project-image {
    box-shadow: 0 10px 30px -15px var(--royal-tint);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--royal-tint);
    }
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--royal-blue);
      border-radius: var(--border-radius);
      vertical-align: middle;
      display: inline-block;
      text-decoration: none;
      color: inherit;
      transition: var(--transition);
      overflow: hidden;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      width: 100%;
      height: 100%;

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
  .icon-f{
        color: var(--secondary-text)!important;
        transition: var(--transition);
        text-decoration: none;
         &:hover{
            color: var(--royal-blue)!important;
         }
    }

    .scnd::before{
        content: ""!important;
    }
`;

const Featured = () => {
  return(
    <section id="projects">
        <h2 className="numbered-heading scnd">
            Feautured Projects
        </h2>
        <StyledProjects>
        <StyledProject>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href="">Project</a>
                    </h3>

                    <div
                      className="project-description"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed euismod, ipsum eget sagittis consequat, nunc
                            nisl euismod nisi, eu porttitor nisl nunc eget
                            ligula.
                        </p>
                    </div>

                    
                      <ul className="project-tech-list">
                        
                          <li>React</li>
                          <li>NodeJS</li>

                      </ul>
                    

                    <div className="project-links">
{/* 
                        <a href={cta} aria-label="Course Link" className="cta">
                          Learn More
                        </a> */}

                        <a href="" aria-label="GitHub Link" className="icon-f">
                          <IconGitHub />
                        </a>
                      

                        <a href="" aria-label="External Link" className="external">
                         
                        </a>

                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href="">
                      <div style={{maxWidth: "700px", height: "100%"}}>
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80" alt="" className="img"/>
                    </div>
                  </a>
                </div>
              </StyledProject>
             
        </StyledProjects>
    </section>
  );
};

export default Featured;
