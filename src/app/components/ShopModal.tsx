import React from "react";

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

  return (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center w-full">
      <div className="bg-white rounded-lg h-[98vh] relative flex w-[95vw]">
        {/* x버튼영역 */}
        <div
          className=" w-[3.5rem] text-[2rem] h-[3.5rem] 
        hover:bg-black group 
        rounded-sm cursor-pointer 
        absolute top-4 right-4 flex items-center justify-center "
        >
          <img
            onClick={closePopup}
            src="icons/x-24.svg"
            className="group-hover:hidden"
          />
          <img
            onClick={closePopup}
            src="icons/x-white-24.svg"
            className="hidden group-hover:block"
          />
        </div>
        {/* 스토어 이미지 영역*/}
        <div className="w-1/2">
          <img
            className=" w-full object-cover h-full rounded"
            src={selectStore.image}
            alt={selectStore.name}
          />
        </div>
        {/* 스토어 설명 영역 */}
        <div className="w-1/2 flex-col flex p-20 justify-between">
          <h3 className="text-title font-bold mb-2">{selectStore.name}</h3>
          <div className="h-full flex justify-between flex-col">
            <p className="h-auto text-sm">
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
            {selectStore.url && <a href={selectStore.url}>Visit Website</a>}
          </div>
        </div>
      </div>
    </div>
  );
};
