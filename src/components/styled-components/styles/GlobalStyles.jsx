/*
Carlos Galvan Jr 

GlobalStyles to be used with styled-component modules
*/
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Inter:wght@700&display=swap');
  
    body {
        /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
        /* transition: all 0.50s ease-out; */
        background-color: none !important;
        
      }
   
      .primary-color,
      .secondary-color,
      .accent-color,
      .global__gradient-background,
      .global__gradient-background--absolute{
        -webkit-transition: background-color .5s  linear;
          -moz-transition: background-color .5s linear;
          -o-transition: background-color .5s linear;
          transition: background-color .5s linear;
      }





    .primary-color{
      background: ${({ theme }) => theme.primaryColor} !important;
      /* -webkit-transition: background-color 1s ease-out;
          -moz-transition: background-color 1s ease-out;
          -o-transition: background-color 1s ease-out; */
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
        theme.type == "light"
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important `
          : theme.primaryColor};;
    
    }

    .global__gradient-background--absolute{
      background:  ${({ theme }) =>
        theme.accentColor && theme.gradientPair
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important `
          : theme.primaryColor};;
    
    }
    .global__gradient-text{
      background:  ${({ theme }) =>
        theme.type == "dark"
          ? ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), #C4C4C4 !important;
          -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important; 
          `
          : `none;
          color: ${theme.secondaryColor}
            
          `}

      
    
    }

    .global__button-effect{
      /* background:  ${({ theme }) => ` linear-gradient(109.36deg, ${theme.accentColor} -4.44%, ${theme.gradientPair} 143.69%), ${theme.accentColor}50 !important `}; */
          background:  ${({ theme }) => theme.accentColor} !important;
          border: none;
          color: white;
          -webkit-transition: background-color 1s ease-out;
          -moz-transition: background-color 1s ease-out;
          -o-transition: background-color 1s ease-out;
          transition: background-color 1s ease-out;

    }
    .global__button-effect:hover{
          background:  ${({ theme }) => theme.primaryColor} !important;
          /* background:  ${({ theme }) => ` linear-gradient(109.36deg, ${theme.gradientPair} -4.44%, ${theme.accentColor} 143.69%), #C4C4C4 !important `}; */
          border: none;
          color: white;

    }

    .global__dropshadow{
      box-shadow: 0 0 30px #33333350;
      /* filter: (0 0 0.75rem ${({ theme }) => theme.primaryColor}; */
      /* filter: (0 0 0.75rem ${({ theme }) => theme.primaryColor}); */
      /* filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210)); */
    }
  

      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        .global__blur-effect {
          background-color: ${({ theme }) =>
            ` ${theme.primaryColor}50 !important`};
          /* rgba(255, 255, 255, 0.5) !important; */
          -webkit-backdrop-filter: blur(10px) !important;
          backdrop-filter: blur(10px) !important;
        }
        .warning { display: none; }
      }

      .global__zoom {
        transition: transform 0.3s;
      } 

      .global__zoom:hover {
          transform: scale(
      1.05
      ); 
}

    
`;

export default GlobalStyle;

/*
 font-family: 'Fira Sans', sans-serif;
font-family: 'Inter', sans-serif;
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
*/
