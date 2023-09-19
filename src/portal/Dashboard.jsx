import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconHelpOctagon,
} from '@tabler/icons-react';

import { Topbar } from "./navigation/Topbar.jsx";
import { Sidebar } from "./navigation/Sidebar.jsx";
import { Dash } from "./tabs/Dash.jsx";
import { Inoffice } from "./tabs/Inoffice.jsx";


const sidebarMenuAll = {
  dash: [
    { icon: IconHome2, label: 'Home', page: Dash },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: Inoffice },
    { icon: IconCalendarStats, label: 'Management', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Inoffice },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  crowd: [
    { icon: IconHome2, label: 'Home', page: Dash },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Inoffice },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  crime: [
    { icon: IconHome2, label: 'Home', page: Dash },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
    { icon: IconFingerprint, label: 'Security', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Inoffice },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  inoffice: [
    { icon: IconHome2, label: 'Home', page: Dash },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: Inoffice },
    { icon: IconUser, label: 'Add Employee', page: Inoffice },
    { icon: IconCalendarStats, label: 'Management', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Inoffice },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ]
}


export function Dashboard() {
  const [menu, setMenu] = useState(sidebarMenuAll.dash);
  const menuChange = (menu) => {
    setMenu(sidebarMenuAll[menu]);
  }

  return (
    <>
      <Topbar menuChange={menuChange} />
      <Sidebar menu={menu} />
    </>
  );
}