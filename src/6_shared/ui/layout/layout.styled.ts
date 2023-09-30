import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';
import { MainWrapperProps } from './layout.component';

export const MainContainerStyled = styled.div<MainWrapperProps>`
  background-color: ${globalTheme.colors.primary.orangeBg};
  width: 390px;
  height: 844px;
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent};
`;
