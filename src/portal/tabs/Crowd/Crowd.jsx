import { Outlet } from "react-router-dom";
import { Sidebar } from "../../navigation/Sidebar";
import { IconHome2, IconGauge, IconUser, IconSettings, IconMacro } from "@tabler/icons-react";
import { IconUserCode } from "@tabler/icons-react";

const sidebar = [
  {
      label: 'Home',
      icon: IconHome2,
      page: '',
  },
  {
      label: 'Analytics',
      icon: IconMacro,
      page: 'analytics',
  },
  {
      label: 'Support',
      icon: IconUserCode,
      page: '/dashboard/support',
  },
  {
      label: 'Settings',
      icon: IconSettings,
      page: '/dashboard/settings',
  },
];


export function Crowd() {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
}