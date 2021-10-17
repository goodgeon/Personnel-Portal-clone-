import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    h1{
        font-family : "メイリオ", 'Source Sans Pro', sans-serif;
        line-height : 1.1;
        color : inherit;
    }
  
    a{
        text-decoration:none;
        color : inherit;
    }
    
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        min-height : 100vh;
        min-width : 100vw;
        color : #333;
    }
    html{
        min-height : 100vh;
        min-width : 100vw;
    }
`;

export default GlobalStyles;
