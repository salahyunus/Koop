import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";

import Topbar from "../global/Topbar";

import { useState } from "react";
import PieChart from "../../components/PieChart";

const Pie = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} activeItem="Team" />

      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        <Box m="20px" mt="10px">
          <Header title="Pie Chart" subtitle="Simple Pie Chart" />
          <Box height="75vh">
            <PieChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Pie;
