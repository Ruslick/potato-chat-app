import styled from "styled-components";
import globalTheme from "../../lib/global.theme";

export const ModalWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #00000055;
`;

export const ModalContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	background-color: whitesmoke;
	padding: 1rem;
	min-width: 20rem;
	justify-content: center;
	align-items: center;
`;

export const ModalDividerStyled = styled.div`
	width: 100%;
	height: 2px;
	background-color: gray;
	margin-top: 1rem;
`;

export const ModalHeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const ModalCloseButtonStyled = styled.button`
	background-color: ${globalTheme.colors.mediumOrange};
	height: 2rem;
	width: 2rem;
	border: none;
	outline: none;
  border-radius: 50%;
`;
