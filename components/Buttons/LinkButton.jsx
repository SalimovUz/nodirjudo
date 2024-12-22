import React from "react";

const LinkButton = ({ icon, label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      <img src={icon} alt={label} className="w-6 h-6" />
      <span>{label}</span>
    </a>
  );
};

export default LinkButton;
