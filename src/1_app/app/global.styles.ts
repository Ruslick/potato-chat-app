import { createGlobalStyle } from 'styled-components';
import { globalTheme } from '../../6_shared/lib/global.theme';
import Nautilus from '../../../public/fonts/Nautilus.otf';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Nautilus';
    src: url(${Nautilus});
  }

  body {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    /* font-weight: ${globalTheme.fontWeights.normal}; */
    background-color: ${globalTheme.colors.primary.white};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
