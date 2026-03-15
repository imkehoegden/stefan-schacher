import React from "react";

export default function ButtonArrowRight({ children, onClick }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-transparent tracking-wide text-gray-500 hover:text-red-500 cursor-pointer flex items-center"
      >
        <span>{children}</span>
        <span className="ml-2 text-2xl align-middle">&#8594;</span>
      </button>
    </div>
  );
}
