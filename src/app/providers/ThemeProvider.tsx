// src/app/providers/ThemeProvider.tsx
"use client";

import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

// 테마 상태를 관리하는 컨텍스트 타입 설정
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

//react에서 제공하는 api를 사용하여 컨텍스트 생성하기
export const ThemeContext = createContext<ThemeContextType | undefined>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light"); //테마 상태관리

  //테마 바뀌는거 감지해서 저장하기
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); //로컬스토리지에 값 저장
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    // 전체페이지에 테마 값 제공하기
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme 훅 설정 이거 해야 다른페이지에서 useTheme을 사용할수있다.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
