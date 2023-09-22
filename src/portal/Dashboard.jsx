import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Topbar } from "./navigation/Topbar.jsx";

export function Dashboard() {

  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}