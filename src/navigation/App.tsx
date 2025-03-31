import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { Route, Routes } from "react-router-dom";
import {
  BudgetPage,
  GroupPage,
  LeadPage,
  NotificationPage,
  ProfilePage,
  SettingPage,
  StudentPage,
  TeacherPage,
} from "../pages";
import { Header, ItemData, Sidebar } from "../shared";
import { NavbarSidebarComponent } from "../shared/Sidebar";
import { GroupDatail, ParentComponent } from "../datails";

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
                  } else if (a.to === "/teacherDatail/:id") {
                    ELEMENT = <ParentComponent />;
                  } else if (a.to === "/groupDatail/:id") {
                    ELEMENT = <GroupDatail />;
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
