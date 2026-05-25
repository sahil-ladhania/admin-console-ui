import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import BackButtonComponent from "./BackButtonComponent";
import ThemeToggle from "./ThemeToggle";

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Section — hidden during print */}
      <div className="no-print">
        <Navigation />
      </div>
      {/* Desktop top-right theme toggle */}
      <div className="hidden lg:flex no-print fixed top-4 right-6 z-40">
        <ThemeToggle />
      </div>
      {/* Content area — padding-left follows CSS var set by Navigation on collapse (desktop only) */}
      <div
        className="print-content-wrapper transition-all duration-300 ease-in-out lg:pl-[var(--sidebar-w,256px)]"
      >
        <main className="p-4 lg:p-8">
          <div className="no-print">
            <BackButtonComponent />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}