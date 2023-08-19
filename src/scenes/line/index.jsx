import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";

import Topbar from "../global/Topbar";

import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <div className="app">
      <Sidebar activeItem="Team" />

      <main className="content">
        <Topbar />

        <Box m="20px" mt="10px">
          <Header title="Line Chart" subtitle="Simple Line Chart" />
          <Box height="75vh">
            <LineChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Line;
