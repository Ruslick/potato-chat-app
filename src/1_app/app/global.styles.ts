import { createGlobalStyle } from 'styled-components';
import { globalTheme } from '../../6_shared/lib/global.theme';

export const GlobalStyle = createGlobalStyle`
  


  body {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    /* font-weight: ${globalTheme.fontWeights.normal}; */
    background-color: ${globalTheme.colors.primaryOrangeBg};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
