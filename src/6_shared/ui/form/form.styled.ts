import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 18px;
  margin-bottom: 40px;
  span {
    font-size: ${globalTheme.fontSize.md};
    font-family: ${globalTheme.fonts[0]};
    color: ${globalTheme.colors.darkGreyGreen};
    font-style: italic;
    font-weight: ${globalTheme.fontWeights.normal};
  }
`;
