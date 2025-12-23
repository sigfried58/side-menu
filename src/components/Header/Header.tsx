import React from 'react';
import { Bell, User, HelpCircle } from 'lucide-react';
import { useProductTour } from '../../hooks/useProductTour';
import './Header.css';

export const Header: React.FC = () => {
    const { startTour } = useProductTour();

    return (
        <header id="app-header" className="app-header">
            <div className="header-left">
                {/* Placeholder for Breadcrumbs or Title */}
                <span className="header-title">My Application</span>
            </div>

            <div className="header-right">
                <button
                    className="header-icon-btn"
                    onClick={startTour}
                    title="Start Product Tour"
                >
                    <HelpCircle size={20} />
                </button>
                <button className="header-icon-btn">
                    <Bell size={20} />
                </button>
                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <span className="username">Admin User</span>
                </div>
            </div>
        </header>
    );
};
