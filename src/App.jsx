import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Dashboard } from "./portal/Dashboard.jsx";
import { Crime } from "./portal/tabs/Crime/Crime.jsx";
import { Inoffice } from "./portal/tabs/Inoffice/Inoffice.jsx";
import { Crowd } from "./portal/tabs/Crowd/Crowd.jsx";
import { Dash } from "./portal/tabs/Dash/Dash.jsx";
import './App.css'
import { Settings } from "./portal/pages/Settings.jsx";
import { Support } from "./portal/pages/Support.jsx";
import { Management } from "./portal/tabs/Dash/Management.jsx";
import { InofficeAnalytics } from "./portal/tabs/Inoffice/InofficeAnalytics.jsx";
import { Analytics } from "./portal/tabs/Dash/Analytics.jsx";
import { CrowdAnalytics } from "./portal/tabs/Crowd/CrowdAnalytics.jsx";
import { CrimeAnalytics } from "./portal/tabs/Crime/CrimeAnalytics.jsx";
import { AddEmployee } from "./portal/tabs/Inoffice/AddEmployee.jsx";
import { DashHome } from "./portal/tabs/Dash/DashHome.jsx";
import { CrimeHome } from "./portal/tabs/Crime/CrimeHome.jsx";
import { CrowdHome } from "./portal/tabs/Crowd/CrowdHome.jsx";
import { InofficeHome } from "./portal/tabs/Inoffice/InofficeHome.jsx";
import {Employees} from "./portal/tabs/Extra/Employees.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route exact path="" element={<Dash />}>
            <Route path="" element={<DashHome />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="management" element={<Management />} />
          </Route>
          <Route exact path="crowd" element={<Crowd />}>
            <Route path="" element={<CrowdHome />} />
            <Route path="analytics" element={<CrowdAnalytics />} />
          </Route>
          <Route exact path="crime" element={<Crime />}>
            <Route path="" element={<CrimeHome />} />
            <Route path="analytics" element={<CrimeAnalytics />} />
          </Route>
          <Route exact path="inoffice" element={<Inoffice />}>
            <Route path="" element={<InofficeHome />} />
            <Route path="analytics" element={<InofficeAnalytics />} />
            <Route path="employees" element={<Employees />} />
          </Route>
          <Route exact path="support" element={<Support />} />
          <Route exact path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
