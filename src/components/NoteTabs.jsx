import React from "react";

const NoteTabs = ({ tabs = [], activeTab, onChangeTab = () => {} }) => {
  return (
    <ul className="my-4 mb-8 flex items-center justify-center gap-4">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`relative cursor-pointer text-lg font-semibold capitalize after:absolute after:-bottom-2 after:left-[50%] after:size-2 after:translate-x-[-50%] after:rounded-full after:bg-blue-500 after:opacity-0 after:content-[''] ${activeTab === tab && "text-blue-500 after:opacity-100"}`}
          onClick={() => onChangeTab(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default NoteTabs;
