import { createRoot } from "react-dom/client";
import { App } from "./1_app/app";
import "firebase/firestore";
import GlobalStyles from "./1_app/app/global.styles";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
