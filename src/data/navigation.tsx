import {
    Settings,
    Users,
    User,
    Folder,
    FileText,
    LayoutDashboard,
    BarChart,
    Mail,
    MessageSquare,
    Shield,
    CreditCard,
    Cloud,
    Database,
    Lock
} from 'lucide-react';
import type { NavigationItem } from '../types';

export const navigationData: NavigationItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        children: [
            { id: 'analytics', label: 'Analytics', icon: BarChart },
            { id: 'reports', label: 'Reports', icon: FileText }
        ]
    },
    {
        id: 'projects',
        label: 'Projects',
        icon: Folder,
        children: [
            {
                id: 'web-app',
                label: 'Web Application',
                icon: Cloud,
                children: [
                    { id: 'frontend', label: 'Frontend', icon: LayoutDashboard },
                    { id: 'backend', label: 'Backend', icon: Database },
                ]
            },
            { id: 'mobile-app', label: 'Mobile App', icon: FileText },
            { id: 'marketing', label: 'Marketing', icon: BarChart }
        ]
    },
    {
        id: 'team',
        label: 'Team',
        icon: Users,
        children: [
            { id: 'members', label: 'Members', icon: Users },
            { id: 'permissions', label: 'Permissions', icon: Lock }
        ]
    },
    {
        id: 'messages',
        label: 'Messages',
        icon: MessageSquare,
        children: [
            { id: 'inbox', label: 'Inbox', icon: Mail },
            { id: 'archived', label: 'Archived', icon: Folder }
        ]
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        children: [
            { id: 'account', label: 'Account', icon: User },
            { id: 'billing', label: 'Billing', icon: CreditCard },
            { id: 'security', label: 'Security', icon: Shield }
        ]
    },
];
