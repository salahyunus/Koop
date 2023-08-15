import React from "react";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import YourGifImage from "../../resources/images/404.gif";
import { Link } from "react-router-dom";
import { dashboardPath } from "../../paths";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006858cc",
    },
  },
});

const NotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${YourGifImage})`,
          backgroundSize: "cover",
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center",
        }}
      >
        <Link to={dashboardPath} underline="none">
          <Button
            variant="contained"
            color="primary"
            sx={{
              zIndex: 1,
              borderRadius: "50px",
              mt: " 45vh",
              height: "50px",
            }}
          >
            Take Me Home...
          </Button>
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default NotFound;
