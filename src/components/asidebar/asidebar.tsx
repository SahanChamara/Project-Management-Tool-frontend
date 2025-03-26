"use client";

import useWorkspaceId from "@/hooks/use-workspace-id";
import { CheckCircle, LayoutDashboard, LucideIcon, Settings, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

type ItemType = {
    title: string;
    url: string;
    icon: LucideIcon
};

export function NavMain() {
    const workspaceId = useWorkspaceId();
    const location = useLocation();
    const pathName = location.pathname;

    const items: ItemType[] = [
        {
            title: "Dashboard",
            url: `/workspace${workspaceId}`,
            icon: LayoutDashboard,
        },
        {
            title: "Tasks",
            url: `/workspace${workspaceId}/tasks`,
            icon: CheckCircle,
        },
        {
            title: "Members",
            url: `/workspace${workspaceId}/members`,
            icon: User,
        },
        {
            title: "Settings",
            url: `/workspace${workspaceId}/settings`,
            icon: Settings,
        },
    ];

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.url === pathName} asChild>
                            <Link to={item.url} className="!text-[15px]">
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}