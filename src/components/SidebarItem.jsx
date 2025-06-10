import React from "react";

const SidebarItem = ({ icon, label, active = false }) => {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center space-x-3">
        <span>{icon}</span>
        <span className="truncate">{label}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
