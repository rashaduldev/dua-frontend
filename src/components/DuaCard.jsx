import React from "react";

const DuaCard = ({ dua }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h3 className="text-lg font-semibold">{dua.title}</h3>
      <p className="text-sm text-gray-600">{dua.description}</p>
    </div>
  );
};

export default DuaCard;
