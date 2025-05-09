import React from "react";

export const Aboutcontent = () => {
  return (
    <section className="mt-25">
      <div className="w-100% mx-25 flex gap-10 h-[50vh]">
        <div className="flex flex-col gap-8 w-1/2">
          <h2 className="text-primary text-title">
            AWESOME
            <br />
            FOOD-STORE
          </h2>
          <p className="text-medium">
            Awesome Food Store는 사용자가 다양한 맛집 정보를 탐색하고, 각 맛집의
            상세 정보를 확인할 수 있는 웹 애플리케이션입니다. 사용자는 맛집
            리스트를 확인하고, 각 맛집의 이미지, 설명, 웹사이트 링크를 통해 더
            많은 정보를 확인할 수 있습니다.
          </p>
          <p>
            이 프로젝트는 코딩 테스트 과제로 개발되었으며, <b>Next.js</b>와
            <b>Tailwind CSS</b>를 사용하여 효율적이고 유지보수 가능한 구조로
            설계되었습니다.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center overflow-hidden">
          <img
            src="https://www.common-ground.co.kr/images/select/select-img.jpg"
            alt="test"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
