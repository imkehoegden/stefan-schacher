import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-[1600px] mx-auto px-8 mt-20">
      {/* max-w-7xl flex flex-col min-h-screen */}
      <Header />
      <main className="flex-1 min-h-[60vh] max-w-[1480px] mx-auto py-10 space-y-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
