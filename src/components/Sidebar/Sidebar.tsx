import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { NavigationItem } from '../../types';
import { SidebarItem } from './SidebarItem';
import { SubmenuPanel } from './SubmenuPanel';
import './sidebar.css';

interface SidebarProps {
    items: NavigationItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activePath, setActivePath] = useState<NavigationItem[]>([]);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleRootClick = (item: NavigationItem) => {
        if (activePath[0]?.id === item.id) {
            return;
        }
        setActivePath([item]);
    };

    const handleSubItemClick = (item: NavigationItem, depth: number) => {
        const newPath = activePath.slice(0, depth + 1);
        newPath[depth] = item;
        setActivePath(newPath);
    };

    const rootWidth = isCollapsed ? 64 : 250;
    const panelWidth = 250;

    return (
        <div className="sidebar-container" style={{ position: 'relative' }}>
            {/* ROOT SIDEBAR (Level 0) */}
            <div id="sidebar-root" className={`sidebar-root ${isCollapsed ? 'collapsed' : ''}`}>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {items.map(item => (
                        <SidebarItem
                            key={item.id}
                            item={item}
                            isActive={activePath[0]?.id === item.id}
                            isCollapsed={isCollapsed}
                            onClick={() => handleRootClick(item)}
                        />
                    ))}
                </div>

                <div className="sidebar-footer">
                </div>

                <button
                    id="sidebar-collapse-btn"
                    className="collapse-btn"
                    onClick={toggleCollapse}
                    title={isCollapsed ? "Expand" : "Collapse"}
                >
                    {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
            </div>

            {/* CASCADING PANELS - OVERLAY */}
            {activePath.map((item, index) => {
                if (!item.children || item.children.length === 0) return null;

                const nextItem = activePath[index + 1];
                const leftPos = rootWidth + (index * panelWidth);

                return (
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            left: leftPos,
                            top: 0,
                            bottom: 0,
                            zIndex: 49 - index
                        }}
                    >
                        <SubmenuPanel
                            title={item.label}
                            items={item.children}
                            activeId={nextItem?.id}
                            onSelect={(selectedItem) => handleSubItemClick(selectedItem, index + 1)}
                        />
                    </div>
                );
            })}
        </div>
    );
};
