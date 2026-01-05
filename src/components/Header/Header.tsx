import { Bell, User, HelpCircle, Menu } from 'lucide-react';
import { useProductTour } from '../../hooks/useProductTour';
import './Header.css';

interface HeaderProps {
    onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    const { startTour } = useProductTour();

    return (
        <header id="app-header" className="app-header">
            <div className="header-left">
                <button
                    className="menu-toggle-btn"
                    onClick={onMenuToggle}
                    aria-label="Toggle Menu"
                >
                    <Menu size={24} />
                </button>
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
