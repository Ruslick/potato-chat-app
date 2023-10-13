import styled from 'styled-components';
import { globalTheme } from '../../lib/global.theme';

export const MenuWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 18px;
  position: sticky;
  padding: 0 20px;
  background-color: ${globalTheme.colors.primary.mediumOrange};
  width: 100%;
  height: 71px;
  border-bottom: 4px solid ${globalTheme.colors.primary.darkOrange};
`;
