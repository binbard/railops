import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import { Topbar } from "./navigation/Topbar.jsx";
import { Sidebar } from "./navigation/Sidebar.jsx";


export function Dashboard() {
  return (
    <>
      <Topbar />
      <Sidebar />
    </>
  );
}