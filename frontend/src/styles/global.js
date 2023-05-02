import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_200};
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_GRAY_200};

        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font-family: 'Roboto Slab', sans-serif;
        font-size: 16px;
        outline: none;
    }

    textarea:focus, input:focus {
        outline: 0;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;