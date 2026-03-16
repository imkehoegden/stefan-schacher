import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-20">
      {/*  flex flex-col min-h-screen */}
      <Header />
      <main className="flex-1 min-h-[55vh] max-w-6xl mx-auto py-10 space-y-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
