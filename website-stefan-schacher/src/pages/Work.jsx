import React from "react";

export default function Work() {
  return (
    <div>
      <h1>Work</h1>
      {/* brauche ich hier eine Sub-Nav */}
      <Outlet /> {/* Hier Unterseiten, also Portrait, Product, etc., rendern */}
    </div>
  );
}
