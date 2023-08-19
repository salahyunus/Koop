// remember to download an earlier version of sidebar (0.7.1 here)
// Managing state
import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// MUI Comps.
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// Navigation
import { Link } from "react-router-dom";
// Sidebar
import "react-pro-sidebar/dist/css/styles.css";
// Colors
import { tokens } from "../../theme";
// USER IMG
import userImg from "../../resources/images/userImg.png";
// ICONS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //home
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined"; //people
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"; //contacts
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"; //receipt
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; //person
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"; //calendar today
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"; //help
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"; //barchart
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"; //piechart
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"; //timeline
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"; //menu
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"; //map

import { useLocation } from "react-router-dom";
import {
  barPath,
  calendarPath,
  contactsPath,
  dashboardPath,
  faqPath,
  formPath,
  geogPath,
  invoicesPath,
  linePath,
  piePath,
  teamPath,
} from "../../paths";
// item component: (using nested component)
const Item = ({ title, to, icon, selected, setSelected }) => {
  // props are: title, to, icon, selected, setSelected
  const theme = useTheme();
  // get colors
  const colors = tokens(theme.palette.mode);

  return (
    // add active class if it's selected
    <MenuItem
      className={selected === title ? "pro-menu-item active" : "pro-menu-item"}
      style={{
        color: colors.grey[100],
      }}
      // setSelected if clicked
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // get current path
  const location = useLocation();

  let userImage = userImg;
  let username = "Salah Yunus";
  let userTitle = "Developer of Koop";
  // useTheme
  const theme = useTheme();
  // Get colors
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [selected, setSelected] = useState("selected");
  useEffect(() => {
    const getPathname = () => {
      const pathname = location.pathname;
      if (pathname === teamPath) {
        return "Manage Team";
      } else if (pathname === dashboardPath) {
        return "Dashboard";
      } else if (pathname === contactsPath) {
        return "Contacts Information";
      } else if (pathname === invoicesPath) {
        return "Invoices Balances";
      } else if (pathname === formPath) {
        return "Profile Form";
      } else if (pathname === calendarPath) {
        return "Calendar";
      } else if (pathname === faqPath) {
        return "FAQ Page";
      } else if (pathname === barPath) {
        return "Bar Chart";
      } else if (pathname === piePath) {
        return "Pie Chart";
      } else if (pathname === linePath) {
        return "Line Chart";
      } else if (pathname === geogPath) {
        return "Geography Chart";
      }
    };

    setSelected(getPathname());
  }, [location.pathname]);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${
            theme.palette.mode === "dark" ? "#FFC107" : "#868dfb"
          } !important`,
        },
        "& .pro-menu-item.active": {
          color: `${
            theme.palette.mode === "dark" ? "#FF9800" : "#6870fa"
          } !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userImage}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {username}
                </Typography>
                <Typography
                  variant="h5"
                  color={`${
                    theme.palette.mode === "dark"
                      ? colors.greenAccent[400]
                      : "#99569a"
                  } !important`}
                >
                  {userTitle}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to={dashboardPath}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
