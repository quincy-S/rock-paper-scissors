import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
   margin:0;
   padding:0;
   box-sizing:border-box;
}

html,body{
   background-color:hsl( 214, 47%, 23%);
   font-family: 'Barlow Semi Condensed', sans-serif;
}
`;

export default GlobalStyle;
