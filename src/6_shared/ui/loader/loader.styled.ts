import styled, { keyframes } from "styled-components";

const rotate1 = keyframes`
    0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
`;

const rotate2 = keyframes`
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
`;

const rotate3 = keyframes`
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
`;

export const LoaderWrapperStyled = styled.div<{$isVisible: boolean}>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #00000055;
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	pointer-events: ${(props) => (props.$isVisible ? "auto" : "none")};
	transition: 300ms 150ms opacity;
`;

export const LoaderStyled = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	& div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}

	& div:nth-child(1) {
		left: 8px;
		animation: ${rotate1} 0.6s infinite;
	}

	& div:nth-child(2) {
		left: 8px;
		animation: ${rotate2} 0.6s infinite;
	}

	& div:nth-child(3) {
		left: 32px;
		animation: ${rotate2} 0.6s infinite;
	}

	& div:nth-child(4) {
		left: 56px;
		animation: ${rotate3} 0.6s infinite;
	}
`;
