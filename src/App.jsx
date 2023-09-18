import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Dashboard } from "./portal/Dashboard.jsx";
import { Crime } from "./portal/Crime.jsx";
import { Inoffice } from "./portal/Inoffice.jsx";
import { Crowd } from "./portal/Crowd.jsx";
import { Dash } from "./portal/Dash.jsx";
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
