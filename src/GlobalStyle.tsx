import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    main, header, footer {
        width: 100%;

        &>section {
            max-width:1024px;
            margin:0 auto;
        }
    }
`;
