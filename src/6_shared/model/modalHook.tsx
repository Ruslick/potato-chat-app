// import { ReactNode, useState } from "react";

import { useState } from 'react';

export const useModal = (initState = false) => {
  const [isVisible, setVisible] = useState(initState);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  return [isVisible, toggleModal] as const;
};
