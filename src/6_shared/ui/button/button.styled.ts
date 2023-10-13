import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';
import { ButtonProps } from '../../model/button';

export const ButtonComponent = styled.button<ButtonProps>`
  display: ${(props) => props.display || 'block'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius || '15px'};
  border: ${(props) => props.border || 'none'};
  font-family: ${globalTheme.fonts[1]};
  font-size: ${globalTheme.fontSize.md};
  font-weight: ${globalTheme.fontWeights.normal};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${globalTheme.colors.primary.white};
  text-align: center;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
