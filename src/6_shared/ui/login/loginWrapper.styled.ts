import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
