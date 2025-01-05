import React from "react";
import { FaHands, FaHome, FaThLarge, FaLightbulb, FaBookmark, FaLock, FaSearch, FaBook } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";

const IconSidebar = () => {
  const icons = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaThLarge />, label: "Categories" },
    { icon: <FaLightbulb />, label: "Ideas" },
    { icon: <FaBookmark />, label: "Bookmarks" },
    { icon: <FaLock />, label: "Locked" },
    { icon: <FaSearch />, label: "Search" },
    { icon: <FaBook />, label: "Library" },
  ];

  return (
    <div className="flex flex-col justify-between items-center w-28 bg-gray-100 py-4 shadow-md rounded-lg">
      {/* Top Icon */}
      <div className="bg-green-500 p-4 rounded-full text-white shadow-md">
        <FaHands size={24} />
      </div>

      {/* Center Icons */}
      <div className="flex flex-col items-center space-y-4 mt-4">
        {icons.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-600 cursor-pointer"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Bottom Icon */}
      <div className="bg-green-500 p-4 rounded-full text-white shadow-md">
        <GiHeartPlus size={24} />
      </div>
    </div>
  );
};

export default IconSidebar;
