import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const LinksLoginWrapper = styled.div`
  font-family: ${globalTheme.fonts[0]};
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    color: ${globalTheme.colors.darkGreyGreen};
    margin-bottom: 18px;
  }
  a {
    color: ${globalTheme.colors.darkGreyGreen};
  }
`;
