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
import { Dash } from "./tabs/Dash/Dash.jsx";
import { Analytics } from "./tabs/Dash/Analytics.jsx";
import {Management} from "./tabs/Dash/Management.jsx";

import { Crowd } from "./tabs/Crowd/Crowd.jsx";
import { CrowdAnalytics } from "./tabs/Crowd/CrowdAnalytics.jsx";
import { Crime } from "./tabs/Crime/Crime.jsx";

import { CrimeAnalytics } from "./tabs/Crime/CrimeAnalytics.jsx";
import Inoffice  from "./tabs/Inoffice/Inoffice.jsx";
import InofficeAnalytics from "./tabs/Inoffice/InofficeAnalytics.jsx";
import { AddEmployee } from "./tabs/Inoffice/AddEmployee.jsx";

import { Settings } from "./pages/Settings.jsx";
import { Support } from "./pages/Support.jsx";


const sidebarMenuAll = {
  dash: [
    { icon: IconHome2, label: 'Home', page: Dash },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: Analytics },
    { icon: IconCalendarStats, label: 'Management', page: Management },
    { icon: IconHelpOctagon, label: 'Support', page: Support },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  crowd: [
    { icon: IconHome2, label: 'Home', page: Crowd },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: CrowdAnalytics },
    { icon: IconHelpOctagon, label: 'Support', page: Support },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  crime: [
    { icon: IconHome2, label: 'Home', page: Crime },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: CrimeAnalytics },
    { icon: IconFingerprint, label: 'Security', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Support },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ],
  inoffice: [
    { icon: IconHome2, label: 'Home', page: Inoffice },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', page: InofficeAnalytics },
    { icon: IconUser, label: 'Add Employee', page: AddEmployee },
    { icon: IconCalendarStats, label: 'Management', page: Inoffice },
    { icon: IconHelpOctagon, label: 'Support', page: Support },
    { icon: IconSettings, label: 'Settings', page: Inoffice },
  ]
}


export function Dashboard() {
  const [tab, setTab] = useState(sidebarMenuAll.dash);
  const [page, setPage] = useState(Dash);
  const tabChange = (menu) => {
    setTab(sidebarMenuAll[menu]);
    setPage(sidebarMenuAll[menu][0].page);
  }

  return (
    <>
      <Topbar tabChange={tabChange} />
      <Sidebar tab={tab} page={page} setPage={setPage} />
    </>
  );
}