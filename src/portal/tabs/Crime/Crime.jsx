import { IconHomeBolt } from "@tabler/icons-react";
import { IconGauge, IconHome2, IconSettings, IconUser } from "@tabler/icons-react";
import { Sidebar } from "../../navigation/Sidebar";
import { Outlet } from "react-router-dom";

const sidebar = [
    {
        label: 'Home',
        icon: IconHomeBolt,
        page: '',
    },
    {
        label: 'Analytics',
        icon: IconGauge,
        page: 'analytics',
    },
    {
        label: 'Support',
        icon: IconUser,
        page: '/dashboard/support',
    },
    {
        label: 'Settings',
        icon: IconSettings,
        page: '/dashboard/settings',
    },
];

export function Crime() {
    return (
        <>
            <Sidebar sidebar={sidebar} />
        </>
    )
}