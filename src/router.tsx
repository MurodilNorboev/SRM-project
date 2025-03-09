import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/home";
import SignInPage from "./pages/Login/SignIn/signIn";
import ScrollToTop from "./components/Navbar/scrollTop";
import NavbarComponent from "./components/Navbar/navbar";
import JoyOrderDashboardTemplates from "./App";
import { ItemData } from "./components/Sidebar/sidebar";
import DemoRequestPage from "./pages/Home/RequestDemo/demo.home";
import ForgotPasswordPage from "./pages/Login/ForgotPassword/forgotPassword.page";
import ChangePasswordPage from "./pages/Login/ChangePassword/changePassword.page";

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
      {!filter && <NavbarComponent />}
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
