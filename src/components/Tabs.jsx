import React from "react";

function Tabs({ tabs,select,toggleTabs }) {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {tabs.map((tab) => (
          <span className={`border border-slate-400 rounded-full px-6 py-3 cursor-pointer shadow-sm ${tab.label === select ? `border border-black duration-200` : ""} `} onClick={() => toggleTabs(tab.label)} key={tab.id} >
            {tab.label}
        </span>
      ))}
    </div>
  );
}

export default Tabs;
