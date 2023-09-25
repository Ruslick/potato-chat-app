import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 18px;
  margin-bottom: 40px;
  p {
    padding: 0;
    margin: 0;
    font-size: ${globalTheme.fontSize.md};
    font-family: ${globalTheme.fonts[0]};
    color: ${globalTheme.colors.darkGreyGreen};
    font-style: italic;
    font-weight: ${globalTheme.fontWeights.normal};
  }
`;
