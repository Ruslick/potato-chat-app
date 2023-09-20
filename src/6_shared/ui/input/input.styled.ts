import styled from "styled-components";
import globalTheme from "../../lib/global.theme";

export const InputComponent = styled.input`
  padding: 14px 95px 14px 14px;
  border-radius: 15px;
  background-color: ${globalTheme.colors.white};
  border: 4px solid ${globalTheme.colors.mediumOrange};
  color: ${globalTheme.colors.softGreen};
  font-family: ${globalTheme.fonts.main};
  font-size: ${globalTheme.fontSize.sm};
  font-weight: ${globalTheme.fontWeights.normal};
  outline-color: ${globalTheme.colors.darkBrownAccent};
`;
export default InputComponent;
