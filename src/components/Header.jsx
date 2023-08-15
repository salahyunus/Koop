import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, headColor, headColorLight }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={theme.palette.mode === "dark" ? headColor : headColorLight}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
