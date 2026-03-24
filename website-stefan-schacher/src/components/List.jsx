import React from "react";

export default function List({ title, clients }) {
  return (
    <div>
      <h2 className="text-xl font-light mb-6">{title}</h2>
      <ul className="list-disc pl-5">
        {clients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </div>
  );
}
