import { createGlobalStyle } from "styled-components";
import vwConverter from "../utils/ViewWidth";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Inter:wght@700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: 'Fira Sans', sans-serif;
  }
  :root {
    
      transition: all 0.50s linear;
    }
    body {
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
        background-color: none !important;
      }
    .dummy-container{
      background-color: #F00281 !important; 
    }

    .primary-color{
      background: ${({ theme }) => theme.primaryColor};
    }
    .secondary-color{
      background: ${({ theme }) => theme.secondaryColor};
    }
    accent-color{
      background: ${({ theme }) => theme.accentColor};
    }
    .responsive-helper{
      font-size: ${vwConverter(50)};
      @media (min-width: 768px) {
        font-size: ${vwConverter(24)};
      }

      @media (min-width: 1024px) {
        font-size: ${vwConverter(16)};
      }
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
