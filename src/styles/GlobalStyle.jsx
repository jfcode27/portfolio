import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';


const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ::selection {
        background: var(--royal-blue);
        color: var(--main-text);
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background: var(--background);
        color: var(--main-text);
        font-family: var(--main-font);
        font-size: var(--fz-xl);
        line-height: 1.3;
    }

`;

export default GlobalStyle;