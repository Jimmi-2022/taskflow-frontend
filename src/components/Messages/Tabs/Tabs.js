import React from "react";
import "./Tabs.scss"; // Make sure to import the SCSS file

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={`tab-button ${activeTab === tab.label ? "active" : ""}`}
          onClick={() => setActiveTab(tab.label)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
