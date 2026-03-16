import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-[1600px] mx-auto mt-20">
      {/* max-w-7xl flex flex-col min-h-screen */}
      <Header />
      <main className="min-h-[75vh] max-w-[1540px] mx-auto py-10 space-y-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
