import React from "react";

export default function Button({ children, onClick }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="m-10 px-4 py-2 bg-transparent tracking-wide text-gray-500 hover:text-red-500 cursor-pointer flex items-center"
      >
        <span>{children}</span>
        <span className="ml-2 text-2xl">&#8594;</span>
      </button>
    </div>
  );
}
