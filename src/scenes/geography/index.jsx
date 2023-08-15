import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";

import Topbar from "../global/Topbar";

import { useState } from "react";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} activeItem="Team" />

      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        <Box m="20px" mt="10px">
          <Header title="World Map" subtitle="Simple Geog Chart" />
          <Box height="75vh">
            <GeographyChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Geography;
