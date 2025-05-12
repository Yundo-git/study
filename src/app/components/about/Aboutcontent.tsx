import React from "react";

export const Aboutcontent = () => {
  return (
    <section className="flex flex-col  gap-10 mt-25 max-lg:mt-4  flex-grow min-h-[300px]">
      <div className="mx-25 max-lg:mx-4 max-lg:flex-col flex max-lg:gap-4 gap-8">
        <div className=" flex flex-col gap-8 w-1/2 max-lg:w-full ">
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
        <div className="w-full md:w-1/2">
          <img
            src="https://www.common-ground.co.kr/images/select/select-img.jpg"
            alt="test"
            className="w-full h-full object-cover rounded-lg shadow-lg "
          />
        </div>
      </div>
    </section>
  );
};
