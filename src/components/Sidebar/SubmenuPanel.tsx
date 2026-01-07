import React from 'react';
import { ChevronLeft } from 'lucide-react';
import type { NavigationItem } from '../../types';
import { SidebarItem } from './SidebarItem';
import './sidebar.css';

interface SubmenuPanelProps {
    items: NavigationItem[];
    title: string;
    activeId?: string;
    onSelect: (item: NavigationItem) => void;
    onBack?: () => void;
}

export const SubmenuPanel: React.FC<SubmenuPanelProps> = ({
    items,
    title,
    activeId,
    onSelect,
    onBack
}) => {
    return (
        <div className="submenu-panel">
            <div className="submenu-header">
                {onBack && (
                    <button className="back-btn" onClick={onBack} aria-label="Go back">
                        <ChevronLeft size={20} />
                    </button>
                )}
                <span className="submenu-title">{title}</span>
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
