import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ColorSchemeToggle from "./ColorSchemaToggle";
import { closeSidebar } from "./utils";
import { useNavigate } from "react-router-dom";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Logo from "../../assets/Logo.jpg";

export const ItemData = [
  {
    id: 1,
    a: "Lead",
    icon: <DashboardRoundedIcon />,
    to: "/lead",
  },
  {
    id: 2,
    a: "Teachers",
    icon: <ShoppingCartRoundedIcon />,
    to: "/teachers",
  },
  {
    id: 3,
    a: "Groups",
    icon: <AssignmentRoundedIcon />,
    to: "/groups",
  },
  {
    id: 4,
    a: "Students",
    icon: <GroupRoundedIcon />,
    to: "/student",
  },
  {
    id: 5,
    a: "Budget",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/budget",
  },
  {
    id: 6,
    a: "Notifications",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/notification",
  },
  {
    id: 7,
    a: "Profile",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/profile",
  },
  {
    id: 8,
    a: "Teacher Datail",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/teacherDatail/:id",
  }, 
  {
    id: 9,
    a: "Group Datail",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/groupDatail/:id",
  },
  {
    id: 10,
    a: "Student Datail",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/studentDatail/:id",
  },
  {
    id: 11,
    a: "office",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/office",
  },
  {
    id: 12,
    a: "ceo",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/ceo",
  },
  {
    id: 13,
    a: "Archive",
    icon: <QuestionAnswerRoundedIcon />,
    to: "/archive",
  },
];

export default function Sidebar() {
  const [selectedItem] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = (item: { a: string; to: string }) => {
    navigate(item.to, { state: { title: item.a } });
  };

  const logaut = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "220px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant="soft" color="primary" size="sm">
          {/* <BrightnessAutoRoundedIcon /> */}
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="logo"
            style={{ width: "40px", borderRadius: "10px" }}
          />
        </IconButton>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <ListItem nested>
          <List
            size="sm"
            sx={{
              gap: 1,
              "--List-nestedInsetStart": "30px",
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
            }}
          >
            {ItemData.slice(0, 6).map((item, ind) => (
              <ListItem key={ind} onClick={() => handleClick(item)}>
                <ListItemButton selected={selectedItem === item.a}>
                  {item.icon}
                  <ListItemContent>
                    <Typography level="title-sm">
                      <div style={{ color: "#6053B9" }}>{item.a}</div>
                    </Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Toggler
            renderToggle={({ open, setOpen }) => (
              <ListItemButton
                sx={{ borderRadius: "5px" }}
                onClick={() => setOpen(!open)}
              >
                <SettingsRoundedIcon />
                <ListItemContent
                  sx={{
                    padding: "5px",
                  }}
                >
                  <Typography level="title-sm" style={{ color: "#6053B9" }}>
                    Settings
                  </Typography>
                </ListItemContent>
                <KeyboardArrowDownIcon
                  sx={[
                    open
                      ? {
                          transform: "rotate(180deg)",
                        }
                      : {
                          transform: "none",
                        },
                  ]}
                />
              </ListItemButton>
            )}
          >
            <List sx={{ gap: 0.5 }}>
              {ItemData.slice(-3).map((item, ind) => {
                return (
                  <ListItem
                    key={ind}
                    onClick={() => handleClick(item)}
                    sx={{ mt: 0.5 }}
                  >
                    <ListItemButton selected={selectedItem === item.a}>
                      <ListItemContent>
                        <Typography
                          style={{ color: "#6053B9" }}
                          level="title-sm"
                        >
                          {item.a}
                        </Typography>
                      </ListItemContent>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Toggler>
        </ListItem>
      </Box>

      <Divider />

      <Box
        onClick={() => navigate("/profile")}
        sx={{ display: "flex", gap: 1, alignItems: "center" }}
      >
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Siriwat K.</Typography>
          <Typography level="body-xs">siriwatk@test.com</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral" onClick={logaut}>
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}
