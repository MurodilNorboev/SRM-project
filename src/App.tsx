import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Sidebar/Headers";
import Sidebar, { ItemData } from "./components/Sidebar/sidebar";
import LeadPage from "./pages/Lead/lead.page";
import TeacherPage from "./pages/Teacher/teacher.page";
import { SettingPage } from "./pages/Setting/index";
import GroupPage from "./pages/Group/group.page";
import StudentPage from "./pages/Student/student.page";
import BudgetPage from "./pages/Budget/budget.page";
import NotificationPage from "./pages/Notification/notification.page";
import NavbarSidebarComponent from "./components/Sidebar/navbar.Sidebar";
import ProfilePage from "./pages/Profile/profile.page";
import Box from "@mui/joy/Box";

export default function JoyOrderDashboardTemplates() {
  return (
    <>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Header />
          <Sidebar />
          <Box
            component="main"
            className="MainContent"
            style={{
              width: "100%",
              height: "100dvh",
            }}
          >
            <NavbarSidebarComponent />
            <Box>
              <Routes>
                {ItemData.flatMap((a) => {
                  let ELEMENT = null;

                  if (a.to === "/lead") {
                    ELEMENT = <LeadPage />;
                  } else if (a.to === "/teachers") {
                    ELEMENT = <TeacherPage />;
                  } else if (a.to === "/groups") {
                    ELEMENT = <GroupPage />;
                  } else if (a.to === "/student") {
                    ELEMENT = <StudentPage />;
                  } else if (a.to === "/budget") {
                    ELEMENT = <BudgetPage />;
                  } else if (a.to === "/notification") {
                    ELEMENT = <NotificationPage />;
                  } else if (a.to === "/office") {
                    ELEMENT = <SettingPage.OfficePage />;
                  } else if (a.to === "/ceo") {
                    ELEMENT = <SettingPage.CeoPage />;
                  } else if (a.to === "/archive") {
                    ELEMENT = <SettingPage.ArchivePage />;
                  } else if (a.to === "/profile") {
                    ELEMENT = <ProfilePage />;
                  }

                  return ELEMENT ? (
                    <Route key={a.to} path={a.to} element={ELEMENT} />
                  ) : null;
                })}
              </Routes>
            </Box>
          </Box>
        </Box>
      </CssVarsProvider>
    </>
  );
}
