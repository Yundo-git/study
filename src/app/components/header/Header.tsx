"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { useTheme } from "../../providers/ThemeProvider";
import { MobileSidebar } from "./MobileSidebar";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // 클라이언트에서만 테마 적용
  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as "light" | "dark";
    if (selectedTheme === "light" || selectedTheme === "dark") {
      toggleTheme();
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav
      className={`flex justify-between p-6 items-center ${
        clientTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } max-lg:p-2`}
    >
      <div className="lg:hidden p-2" onClick={toggleSidebar}>
        {theme === "dark" ? (
          <img src="icons/menu-white-24.svg" />
        ) : (
          <img src="icons/menu-24.svg" />
        )}
      </div>

      {/* 사이드바 (모바일) */}
      <div className="lg:hidden">
        <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* 드롭다운 영역 (PC) */}
      <div className="relative hidden lg:block">
        <select
          value={clientTheme}
          onChange={handleSelect}
          className="p-2 text-medium responsive-text"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* 카테고리 영역 (PC) */}
      <div className="flex gap-24 hidden lg:flex">
        <Link href="/" className="text-header">
          ABOUT
        </Link>
        <Link href="/shop" className="text-header">
          SHOP
        </Link>
      </div>

      {/* 로고 이미지 영역 */}
      <Link href="/" className="text-primary text-header ">
        AWESOME
        <br />
        FOOD-STORE
      </Link>
    </nav>
  );
}

export default Header;
