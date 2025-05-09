"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";

// 언어 타입을 문자열 리터럴 타입으로 지정
type Language = "KOREAN" | "ENGLISH" | "CHINESE" | "JAPANESE";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("KOREAN");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as Language);
  };

  return (
    <nav className="flex justify-between p-6 items-center">
      {/* 드롭다운 영역 */}
      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={handleSelect}
          className="bg-white p-2"
        >
          <option value="KOREAN">KOREAN</option>
          <option value="ENGLISH">ENGLISH</option>
          <option value="CHINESE">CHINESE</option>
          <option value="JAPANESE">JAPANESE</option>
        </select>
      </div>
      {/* 카테고리 영역 */}
      <div className="flex  gap-24">
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
