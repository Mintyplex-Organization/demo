// components/ScrollableTabs.js
import React from 'react';

const ScrollableTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex overflow-x-scroll md:overflow-auto">
            <div className="flex items-center text-white space-x-8 px-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-3 py-2 text-sm font-medium focus:outline-none ${activeTab === tab
                                ? 'text-indigo-600 border-b-2 border-blue-700'
                                : 'text-gray-500 hover:text-blue-700 hover:border-blue-700'
                            }`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))}



            </div>
        </div>
    );
};

export default ScrollableTabs;
