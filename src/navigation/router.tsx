import { Route, Routes, useLocation } from "react-router-dom";
import JoyOrderDashboardTemplates from "./App";
import { ChangePasswordPage, DemoRequestPage, ForgotPasswordPage, HomePage, SignInPage } from "../pages";
import { ItemData, NavbarSidebarComponent, ScrollToTop } from "../shared";

const RouterComponent = () => {
  const login = useLocation();

  const filter =
    (login.pathname !== "/signin" &&
      login.pathname !== "/forgotPassword" &&
      login.pathname !== "/changePassword" &&
      login.pathname !== "/demo" &&
      login.pathname !== "/") ||
    ItemData.some((a) => login.pathname === a.to);

  return (
    <>
      <ScrollToTop />
      {!filter && <NavbarSidebarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoRequestPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/*" element={<JoyOrderDashboardTemplates />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
