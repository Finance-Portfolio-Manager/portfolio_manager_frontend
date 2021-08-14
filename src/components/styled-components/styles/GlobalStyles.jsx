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
      /* font-family: 'Inter', sans-serif; */
      /* font-weight: bold; */
    }
    .default-container{
      min-height: 100vh;
    }
    .global__gradient-background{
      background:  ${({ theme }) =>
        (theme.type == 'light')
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important `
          : theme.primaryColor
          };;
    
    }
    .global__gradient-text{
      background:  ${({ theme }) =>
        (theme.type == 'dark')
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important;
          -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important; 
          `
          :  `none;
          color: ${theme.secondaryColor}
            
          `
          }

      
    
    }

    .global__button-effect{
      background:  ${({ theme }) =>
        (theme)
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important `
          : theme.accentColor
          };;
          border: none;
          color: white;

    }
    /* .violet__gradient{
      

  @supports (--css: variables) {
    background: linear-gradient(109.36deg, rgba(215, 39, 219, 0.7) -4.44%, rgba(0, 56, 255, 0.7) 143.69%), #C4C4C4 !important;
   
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
    
    } */
    
`;

export default GlobalStyle;

/*
 font-family: 'Fira Sans', sans-serif;
font-family: 'Inter', sans-serif;
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
*/
