import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MobileRedirect from "./MobileRedirect";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import NotFound from "./scenes/global/NotFound";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
// Paths
import {
  contactsPath,
  dashboardPath,
  teamPath,
  invoicesPath,
  formPath,
  barPath,
  piePath,
  linePath,
  faqPath,
  geogPath,
  calendarPath,
} from "./paths";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      {" "}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MobileRedirect />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path={dashboardPath} element={<Dashboard />} />
              <Route path={teamPath} element={<Team />} />
              <Route path={contactsPath} element={<Contacts />} />
              <Route path={invoicesPath} element={<Invoices />} />
              <Route path={formPath} element={<Form />} />
              <Route path={barPath} element={<Bar />} />
              <Route path={piePath} element={<Pie />} />
              <Route path={linePath} element={<Line />} />
              <Route path={faqPath} element={<FAQ />} />
              <Route path={calendarPath} element={<Calendar />} />
              <Route path={geogPath} element={<Geography />} />
            </Routes>{" "}
          </main>
        </div>{" "}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
