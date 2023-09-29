import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const InputComponent = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background-color: ${globalTheme.colors.white};
  border: 4px solid ${globalTheme.colors.primaryMediumOrange};
  color: ${globalTheme.colors.secondarySoftGreen};
  font-family: ${globalTheme.fonts[0]};
  font-size: ${globalTheme.fontSize.sm};
  font-weight: ${globalTheme.fontWeights.normal};
  outline-color: ${globalTheme.colors.primaryDarkOrange};
  text-indent: 18px;
`;
