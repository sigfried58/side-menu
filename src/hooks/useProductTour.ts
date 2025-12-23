import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export const useProductTour = () => {
    const startTour = () => {
        const driverObj = driver({
            showProgress: true,
            steps: [
                {
                    element: '#sidebar-root',
                    popover: {
                        title: 'Sidebar Navigation',
                        description: 'Navigate through different sections of the application here. Click items to see cascading submenus.',
                        side: "right",
                        align: 'start'
                    }
                },
                {
                    element: '#sidebar-collapse-btn',
                    popover: {
                        title: 'Collapse Sidebar',
                        description: 'Need more space? Click here to collapse the sidebar to icon-only mode.',
                        side: "right"
                    }
                },
                {
                    element: '#app-header',
                    popover: {
                        title: 'App Header',
                        description: 'Access your profile, notifications, and settings here.',
                        side: "bottom"
                    }
                }
            ]
        });

        driverObj.drive();
    };

    return { startTour };
};
