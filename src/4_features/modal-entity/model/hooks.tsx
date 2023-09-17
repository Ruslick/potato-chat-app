import { Modal } from "../../../6_shared/ui/modal/modal.component";
import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

export const useModal = (component: ReactNode, title?: string) => {
	const [visible, setVisible] = useState(false);

	const toggleModal = () => {
		setVisible(!visible);
	};

	useEffect(() => {

		if (visible) {
			createPortal(
				<Modal title={title} toggleModal={toggleModal}>{component}</Modal>,
				document.getElementById("modal") as HTMLElement
			);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	return toggleModal;
};
