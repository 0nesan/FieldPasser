import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NanumSquareNeo-Variable';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    *  {
        padding:0;
        margin:0;
        box-sizing: border-box;
        line-height: 1;
        color: #3a3a3a;
        font-family: 'Pretendard-Regular', 'Noto Sans KR', sans-serif;
    }

    main , header, footer  {
        width: 100%;

        &>section {
            max-width:1024px;
            width:100%;
            margin:0 auto;
        }
    }

    a {
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100%;
        text-decoration: none;
    }

    button {
        display:flex;
        justify-content: center;
        align-items: center;
        background:none;
        border:none;
        cursor: pointer;
    }
`;

export const COLORS = {
    MainColor: '#5FCA7B'
}
