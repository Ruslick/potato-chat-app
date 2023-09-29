import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const ButtonComponent = styled.button`
  padding: 10px 17px;
  border-radius: 15px;
  border: none;
  font-family: ${globalTheme.fonts[1]};
  font-size: ${globalTheme.fontSize.md};
  font-weight: ${globalTheme.fontWeights.normal};
  background-color: ${globalTheme.colors.primaryDarkOrange};
  color: ${globalTheme.colors.white};
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
