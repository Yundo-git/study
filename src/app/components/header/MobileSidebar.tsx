"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../../providers/ThemeProvider";

interface MobileSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`lg:hidden fixed inset-0 left-0 bg-primary text-white w-full transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="p-6 flex flex-col gap-4">
        <div onClick={toggleSidebar}>
          <img src="/icons/x-white-24.svg" />
        </div>
        <select
          value={theme}
          onChange={() => {
            toggleTheme();
            toggleSidebar();
          }}
          className="border my-6 p-2 text-header w-1/2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <Link href="/" onClick={toggleSidebar} className="text-header ">
          ABOUT
        </Link>
        <Link href="/shop" onClick={toggleSidebar} className="text-header">
          SHOP
        </Link>
      </div>
    </div>
  );
};
