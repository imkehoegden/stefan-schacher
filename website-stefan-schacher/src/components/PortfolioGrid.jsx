import React from "react";

export default function PortfolioGrid({ projects }) {
  return (
    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {projects.map((p) => (
        <div key={p.id} className="project-card bg-white shadow rounded">
          <img src={p.image} alt={p.title} className="rounded-t" />
          <h3 className="text-lg font-semibold p-4">{p.title}</h3>
        </div>
      ))}
    </section>
  );
}
