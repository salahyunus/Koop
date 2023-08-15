// Box, IconButton are components from mui
// useTheme is for providing mui with usable theme
import { Box, IconButton, useTheme } from "@mui/material";
// Importing react hook that enables accessing context
import { useContext } from "react";
// importing colors and custom context from theme
import { ColorModeContext, tokens } from "../../theme";
// Input box component from mui
import InputBase from "@mui/material/InputBase";
// ICONS
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import styled from "@emotion/styled";
// x = styled.y`a: b`

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton></IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
