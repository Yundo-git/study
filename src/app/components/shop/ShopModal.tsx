import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

interface Store {
  id: number;
  name: string;
  image: string;
  description: string;
  url?: string;
}

interface ShopsProps {
  popupState: boolean;
  selectStore: Store;
  closePopup: () => void;
}
export const ShopModal: React.FC<ShopsProps> = ({
  popupState,
  selectStore,
  closePopup,
}) => {
  if (!popupState) return null;

  const { theme } = useTheme();

  return (
    <div className="fixed rounded inset-0 bg-black/50  flex items-center justify-center w-full">
      <div className="bg-white rounded-lg h-[98vh] max-lg:h-full relative flex w-[95vw] max-lg:w-full max-lg:flex-col">
        {/* x버튼영역 */}
        <div
          onClick={closePopup}
          className={`absolute w-[3.5rem] text-[2rem] h-[3.5rem]
        rounded-sm cursor-pointer top-4 right-4 flex items-center justify-center
        group ${
          theme === "dark"
            ? "hover:bg-white hover:text-black  max-lg:bg-black "
            : "hover:bg-black hover:text-white  max-lg:bg-white"
        }`}
        >
          {/* 버튼 색깔 바꾸기 */}
          {theme === "dark" ? (
            <img
              src="icons/x-white-24.svg"
              className="block group-hover:hidden"
            />
          ) : (
            <img src="icons/x-24.svg" className="block group-hover:hidden" />
          )}
          {/* 버튼 배경 색깔바꾸기 */}
          {theme === "dark" ? (
            <img src="icons/x-24.svg" className="hidden group-hover:block" />
          ) : (
            <img
              src="icons/x-white-24.svg"
              className="hidden group-hover:block"
            />
          )}
        </div>
        {/* 스토어 이미지 영역*/}
        <div className="w-1/2 max-lg:w-full max-lg:h-1/2">
          <img
            className=" w-full object-cover h-full rounded-l"
            src={selectStore.image}
            alt={selectStore.name}
          />
        </div>
        {/* 스토어 설명 영역 */}
        <div className="w-1/2 max-lg:w-full bg-modal overflow-y-auto flex-col rounded-r flex p-20 max-lg:p-10 justify-between">
          <h3 className="text-title font-bold mb-2">{selectStore.name}</h3>
          <div className=" flex justify-between flex-col">
            <p className="text-l .responsive-text">
              {selectStore.description
                .split(/\n|\u2028|\. /) // \n 또는 \u2028 (줄바꿈) 또는 . 으로 분리
                .map((sentence, index) => (
                  <span key={index}>
                    {sentence.trim()}
                    <br />
                    <br />
                  </span>
                ))}
            </p>
            {/* url이 있다면 표시 */}
            {selectStore.url && (
              <a className="mt-15" href={selectStore.url}>
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
