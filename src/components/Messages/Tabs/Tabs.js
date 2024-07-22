import React, { useState } from 'react';
import './Tabs.scss'; // Make sure to import the SCSS file

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('General');

    return (
        <div className="tabs">
            <button
                className={activeTab === 'General' ? 'active' : ''}
                onClick={() => setActiveTab('General')}
            >
                General
            </button>
            <button
                className={activeTab === 'Projects' ? 'active' : ''}
                onClick={() => setActiveTab('Projects')}
            >
                Projects
            </button>
        </div>
    );
};

export default Tabs;
