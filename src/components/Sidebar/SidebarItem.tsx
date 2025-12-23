import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { NavigationItem } from '../../types';
import './sidebar.css';

interface SidebarItemProps {
    item: NavigationItem;
    isActive: boolean;
    isCollapsed?: boolean;
    onClick: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    item,
    isActive,
    isCollapsed,
    onClick
}) => {
    const Icon = item.icon;

    return (
        <div
            className={`sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClick}
            title={isCollapsed ? item.label : undefined}
        >
            <div className="sidebar-item-icon">
                <Icon size={20} />
            </div>
            <span className="sidebar-item-label">
                {item.label}
            </span>
            {!isCollapsed && item.children && (
                <ChevronRight size={16} className="chevron-icon" />
            )}
        </div>
    );
};
