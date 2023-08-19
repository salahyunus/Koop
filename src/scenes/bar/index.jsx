// Box: the simplest compo. in mui
import { Box } from "@mui/material";
// Header
import Header from "../../components/Header";
// BarChart
import BarChart from "../../components/BarChart";
// Sidebar
import Sidebar from "../global/Sidebar";
// Topbar
import Topbar from "../global/Topbar";

const Bar = () => {
  return (
    <div className="app">
      <Sidebar activeItem="Team" />

      <main className="content">
        <Topbar />

        <Box m="20px" mt="10px">
          <Header title="Bar Chart" subtitle="Simple Bar Chart" />
          <Box height="75vh">
            <BarChart />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Bar;
