import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { NavigationItem } from '../../types';
import { SidebarItem } from './SidebarItem';
import { SubmenuPanel } from './SubmenuPanel';
import './sidebar.css';

interface SidebarProps {
    items: NavigationItem[];
    isMobileOpen: boolean;
    onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, isMobileOpen, onCloseMobile }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activePath, setActivePath] = useState<NavigationItem[]>([]);

    const sidebarRef = useRef<HTMLDivElement>(null);

    // Clear active path when mobile menu closes
    useEffect(() => {
        if (!isMobileOpen) {
            setActivePath([]);
        }
    }, [isMobileOpen]);

    // Close panels when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                if (activePath.length > 0) {
                    setActivePath([]);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activePath]);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleRootClick = (item: NavigationItem) => {
        if (!item.children || item.children.length === 0) {
            onCloseMobile();
            setActivePath([]);
            return;
        }
        if (activePath[0]?.id === item.id) {
            return;
        }
        setActivePath([item]);
    };

    const handleSubItemClick = (item: NavigationItem, depth: number) => {
        if (!item.children || item.children.length === 0) {
            onCloseMobile();
            return;
        }
        setActivePath(prev => {
            const newPath = prev.slice(0, depth);
            newPath[depth] = item;
            return newPath;
        });
    };

    const handleBack = () => {
        setActivePath(prev => prev.slice(0, -1));
    };

    const isPanelOpen = activePath.length > 0;

    return (
        <div ref={sidebarRef} className={`sidebar-container ${isMobileOpen ? 'mobile-open' : ''} ${isPanelOpen ? 'panel-open' : ''}`}>
            {/* MOBILE OVERLAY */}
            <div className="mobile-overlay" onClick={onCloseMobile} />

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
                const isLast = index === activePath.length - 1;

                return (
                    <div
                        key={item.id}
                        className={`submenu-panel-wrapper ${isLast ? 'active-panel' : ''}`}
                        style={{
                            zIndex: 1100 + index,
                            '--panel-index': index
                        } as any}
                    >
                        <SubmenuPanel
                            title={item.label}
                            items={item.children}
                            activeId={nextItem?.id}
                            onSelect={(selectedItem) => handleSubItemClick(selectedItem, index + 1)}
                            onBack={handleBack}
                        />
                    </div>
                );
            })}
        </div>
    );
};
