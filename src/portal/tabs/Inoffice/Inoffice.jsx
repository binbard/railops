import { Outlet } from "react-router-dom";
import { Sidebar } from "../../navigation/Sidebar";
import { IconHome2, IconGauge, IconUser, IconSettings, IconEPassport } from "@tabler/icons-react";
import { Icon360 } from "@tabler/icons-react";

const sidebar = [
    {
        label: 'Home',
        icon: IconHome2,
        page: '',
    },
    {
        label: 'Analytics',
        icon: Icon360,
        page: 'analytics',
    },
    {
        label: 'Employess',
        icon: IconEPassport,
        page: 'employees',
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


export function Inoffice() {
    return (
        <>
            <Sidebar sidebar={sidebar} />
        </>
    );
}