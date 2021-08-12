/*
Carlos Galvan Jr 

GlobalStyles to be used with styled-component modules
*/
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Inter:wght@700&display=swap');
  
    body {
        /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
        transition: all 0.50s linear;
        background-color: none !important;
      }
   

    .primary-color{
      background: ${({ theme }) => theme.primaryColor} !important;
    }
    .secondary-color{
      background: ${({ theme }) => theme.secondaryColor} !important;
    }
    .accent-color{
      background: ${({ theme }) => theme.accentColor} !important;
    }
    .accent-text{
      color: ${({ theme }) => theme.accentColor} !important;
    }
    .primary-text{
      color: ${({ theme }) => theme.primaryText} !important;
    }
    .secondary-text{
      color: ${({ theme }) => theme.secondaryText} !important;;
    }
    /*  */
    .nav__logo{
      color: ${({ theme }) => theme.secondaryText} !important;;
    }
    .float{
	    position:fixed;
	    bottom:40px;
	    right:40px;
    }
    
    .make-transparent{
      background: transparent !important;
    }
    :is(h1, h2, h3, h4, h5, h6) {
      font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyle;

/*
 font-family: 'Fira Sans', sans-serif;
font-family: 'Inter', sans-serif;
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
*/
