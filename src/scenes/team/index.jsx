import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";
import Header from "../../components/Header";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
const Team = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      // custom name to change color
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.blueAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="5px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} activeItem="Team" />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        <Box m="20px" mt="10px">
          <Header
            title="TEAM"
            subtitle="Manage Team Members"
            headColor="#FF9800"
            headColorLight="#6870fa"
          />
          <Box
            m="40px 0 0 0"
            height="75vh"
            mt="5px"
            sx={{
              "& .MuiDataGrid-root": { border: "none" },
              "& .MuiDataGrid-cell": { borderBottom: "none" },
              "& .name-column--cell": { color: colors.greenAccent[300] },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#FF9800" : "#868dfb",
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#FF9800" : "#868dfb",
              },
              "& .MuiCheckbox-root": {
                color: `${colors.grey[200]} !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={mockDataTeam}
              columns={columns}
            ></DataGrid>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Team;
