import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";

import Topbar from "../global/Topbar";

import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <div className="app">
      <Sidebar activeItem="Team" />

      <main className="content">
        <Topbar />

        <Box m="20px" mt="10px">
          <Header title="World Map" subtitle="Not Simple Geog Chart" />
          <Box height="75vh">
            <GeographyChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Geography;
