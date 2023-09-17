// import { ReactNode, useState } from "react";

import { useState } from "react";

export const useModal = () => {
	const [isVisible, setVisible] = useState(false);

	const toggleModal = () => {
		setVisible(!isVisible);
	};

	return [isVisible, toggleModal] as const;
};
