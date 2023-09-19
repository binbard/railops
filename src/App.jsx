import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Dashboard } from "./portal/Dashboard.jsx";
import { Crime } from "./portal/tabs/Crime.jsx";
import { Inoffice } from "./portal/tabs/Inoffice.jsx";
import { Crowd } from "./portal/tabs/Crowd.jsx";
import { Dash } from "./portal/tabs/Dash.jsx";
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Dash />} />
          <Route path="crowd" element={<Crowd />} />
          <Route path="crime" element={<Crime />} />
          <Route path="inoffice" element={<Inoffice />} />

          <Route path="analytics" element={<Inoffice />} />
          <Route path="management" element={<Inoffice />} />
          <Route path="support" element={<Inoffice />} />
          <Route path="account" element={<Inoffice />} />
          <Route path="settings" element={<Inoffice />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
