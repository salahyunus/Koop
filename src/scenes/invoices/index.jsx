import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";

const Invoices = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.redAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} activeItem="Team" />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Box m="20px" mt="5px">
          <Header
            title="INVOICES"
            subtitle="List of Invoice Balances"
            headColor={colors.blueAccent[500]}
            headColorLight={colors.blueAccent[500]}
          />
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.redAccent[200]} !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={mockDataInvoices}
              columns={columns}
            />
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Invoices;
