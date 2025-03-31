import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/ store.ts";
import "./i18n";
import RouterComponent from "./navigation/router.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </Provider>
);
