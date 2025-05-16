"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCount] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1); // 1초씩 카운트다운
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/"); // 5초후 이동
    }, 5000);

    return () => {
      clearInterval(timer); // timer초기화
      clearTimeout(redirect); //redicrect 초기화
    };
  }, [router]);

  if (countdown === null) {
    // 타이머가 초기화되지 않은 상태에서 로딩 표시하기
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center ">
        <h1 className="text-4xl font-bold mb-4 max-lg:mx-4 max-lg:text-xl">
          404 - 페이지를 찾을 수 없습니다.
        </h1>
        <p className="text-gray-600 mb-4">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 max-lg:mx-4 max-lg:text-2xl">
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <p className="text-gray-600 mb-4">
        {countdown}초 후 메인 페이지로 이동합니다.
      </p>
      {/* 게이지 영역 */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-1000"
          style={{ width: `${(5 - countdown) * 20}%` }}
        ></div>
      </div>
    </div>
  );
}
