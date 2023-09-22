import { Outlet } from "react-router-dom";
import { Sidebar } from "../../navigation/Sidebar";
import { DashHome } from "./DashHome";
import { IconHome2, IconGauge, IconUser, IconSettings, IconAccessPoint } from "@tabler/icons-react";

const sidebar = [
  {
    label: 'Home',
    icon: IconHome2,
    page: '',
  },
  {
    label: 'Analytics',
    icon: IconGauge,
    page: 'analytics',
  },
  {
    label: 'Management',
    icon: IconAccessPoint,
    page: 'management',
  },
  {
    label: 'Support',
    icon: IconUser,
    page: 'support',
  },
  {
    label: 'Settings',
    icon: IconSettings,
    page: 'settings',
  },
];


export function Dash() {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
}