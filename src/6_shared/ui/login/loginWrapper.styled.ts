import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const LoginWrapper = styled.div`
  font-family: ${globalTheme.fonts[0]};
  margin: 0;
  p {
    margin: 0;
    color: ${globalTheme.colors.darkGreyGreen};
    font-size: ${globalTheme.fontSize.sm};
    margin-bottom: 18px;
  }
  a {
    color: ${globalTheme.colors.darkGreyGreen};
  }
`;
