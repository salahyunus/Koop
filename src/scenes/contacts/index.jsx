import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
const Contacts = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip-Code",
      flex: 1,
    },
  ];
  // const components = {
  //   Toolbar: GridToolbar,
  // };
  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} activeItem="Team" />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

        <Box m="20px" mt="10px">
          <Header
            title="CONTACTS"
            subtitle="List of Contacts for Reference"
            headColor={colors.greenAccent[500]}
            headColorLight={colors.greenAccent[500]}
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
                backgroundColor: colors.greenAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.greenAccent[700],
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
          >
            <DataGrid
              rows={mockDataContacts}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            ></DataGrid>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Contacts;
