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
      <div className="bg-white rounded-lg h-[95vh] relative flex w-[90vw]">
        <button
          className="absolute w-[3.5rem] text-[2rem] h-[3.5rem] top-4 right-4 text-gray-600 cursor-pointer"
          onClick={closePopup}
        >
          X
        </button>
        <div className="w-1/2">
          <img
            className=" w-full object-cover h-full rounded"
            src={selectStore.image}
            alt={selectStore.name}
          />
        </div>
        <div className="w-1/2 flex-col flex p-20 justify-between">
          <h3 className="text-title font-bold mb-2">{selectStore.name}</h3>
          <div>
            <p className=" overflow-y-auto h-auto">
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
            {selectStore.url && (
              <a
                href={selectStore.url}
                target="_blank"
                className="text-blue-500 underline mt-20 block"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
