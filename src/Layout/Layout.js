// src/Layout/Layout.jsx
import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // دالة لتحديد إذا كان الـ link نشيط
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const handleLogout = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في تسجيل الخروج؟')) {
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen w-full font-display bg-[#f6f7f8] dark:bg-[#101922]">

      {/* Sidebar */}
      <aside className="flex h-screen flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] w-64 p-4 sticky top-0">
        <div className="flex flex-col gap-4 h-full">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNagcnZIxCceF9RbaM3hNKle5UNO5TLPJzuU61Iz_UXbCtux4eG4Z1FhGDlbjyChyWKyMUy1ufZsLnaQIZutWL42CbThQsd0bTM_fneur8EQvPCVECMd0JR_dtxULUYNWANjehQM_AQp7KQWpVsL5yOV7JNVJgJIsLy0LFWageyQ8bGRgPNr63spkAUCmKAzefBBitcyIPXEr-qprqWR49KTlZ2HP9joqaMc6F6ds2xO75s5I4c6-HKSw9OJAoU6WarmzOFrTzyJFF")'
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-slate-200 text-base font-bold">SIRS</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">Authority Portal</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 mt-4 flex-grow">
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive("/dashboard")
                  ? "bg-[#137fec]/10 text-[#137fec]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </Link>

            <Link
              to="/reports"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive("/reports")
                  ? "bg-[#137fec]/10 text-[#137fec]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>summarize</span>
              <p className="text-sm font-medium">Reports</p>
            </Link>

            <Link
              to="/map"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive("/map")
                  ? "bg-[#137fec]/10 text-[#137fec]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined">map</span>
              <p className="text-sm font-medium">Map</p>
            </Link>

            <Link
              to="/analytics"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive("/analytics")
                  ? "bg-[#137fec]/10 text-[#137fec]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined">analytics</span>
              <p className="text-sm font-medium">Analytics</p>
            </Link>

            <Link
              to="/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive("/settings")
                  ? "bg-[#137fec]/10 text-[#137fec]"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Settings</p>
            </Link>
          </nav>

          <div className="flex flex-col gap-1 mt-auto">
            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium">Log out</p>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
