import { FC } from "react";
import { LoaderStyled, LoaderWrapperStyled } from "./loader.styled";
import { createPortal } from "react-dom";

export const Loader: FC = () => {
	return createPortal(
		<LoaderWrapperStyled>
			<LoaderStyled>
				<div />
				<div />
				<div />
				<div />
			</LoaderStyled>
		</LoaderWrapperStyled>,
		document.getElementById("modal") as HTMLElement
	);
};
