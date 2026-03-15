import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-6xl mx-auto px-8 mt-30">
      {/* mt-30 = margin top  */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
