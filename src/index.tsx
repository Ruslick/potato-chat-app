import { createRoot } from "react-dom/client";
import "firebase/firestore";
import { App } from "./1_app/app";
import { GlobalStyle } from "./1_app/app/global.styles";

   const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <App />
    <GlobalStyle />
  </>,
);
