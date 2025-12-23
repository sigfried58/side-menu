import React from 'react';
import type { NavigationItem } from '../../types';
import { SidebarItem } from './SidebarItem';
import './sidebar.css';

interface SubmenuPanelProps {
    items: NavigationItem[];
    title: string;
    activeId?: string;
    onSelect: (item: NavigationItem) => void;
}

export const SubmenuPanel: React.FC<SubmenuPanelProps> = ({
    items,
    title,
    activeId,
    onSelect
}) => {
    return (
        <div className="submenu-panel">
            <div className="submenu-header">
                {title}
            </div>
            <div className="submenu-list">
                {items.map(item => (
                    <SidebarItem
                        key={item.id}
                        item={item}
                        isActive={activeId === item.id}
                        isCollapsed={false}
                        onClick={() => onSelect(item)}
                    />
                ))}
            </div>
        </div>
    );
};
