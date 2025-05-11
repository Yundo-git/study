"use client";

import { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string>("");

  // 클라이언트에서만 테마 적용 안하면 에러남
  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as "light" | "dark";
    if (selectedTheme === "light" || selectedTheme === "dark") {
      toggleTheme();
    }
  };

  return (
    <nav className="flex justify-between p-6 items-center">
      {/* 드롭다운 영역 */}
      <div className="relative">
        <select value={clientTheme} onChange={handleSelect}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* 카테고리 영역 */}
      <div className="flex gap-24">
        <Link href="/" className="text-header">
          ABOUT
        </Link>
        <Link href="/shop" className="text-header">
          SHOP
        </Link>
      </div>

      {/* 로고 이미지 영역 */}
      <Link href="/" className="text-primary text-title">
        AWESOME
        <br />
        FOOD-STORE
      </Link>
    </nav>
  );
}

export default Header;
