"use client";

import React, { useEffect, useState } from "react";
import { ShopModal } from "./ShopModal";

interface Store {
  id: number;
  name: string;
  image: string;
  thumb: string;
  description: string;
  url?: string;
}

export const Shopcontent = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [popupState, setPopupState] = useState<boolean>(false);
  const [selectStore, setSeletStore] = useState<Store | null>(null);

  //Api 호출
  const fetchStores = async () => {
    try {
      const response = await fetch("http://localhost:9000/stores");
      if (response.ok) {
        const data = await response.json();
        setStores(data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  //팝업 상태관리
  const imgClick = (store: Store) => {
    setPopupState(true);
    setSeletStore(store);
    console.log("사진클릭됨!", store);
  };
  const closePopup = () => {
    setPopupState(false);
  };

  return (
    <>
      {/* API로딩 상태 */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 text-gray-600 text-2xl font-bold z-50">
          Loading...
        </div>
      )}
      <section className="m-25">
        <h2 className="text-title">EAT</h2>
        <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stores.map((store) => (
            <div key={store.id} onClick={() => imgClick(store)}>
              <img
                className="rounded-lg cursor-pointer w-full h-auto "
                src={store.thumb}
                alt={store.name}
              />
            </div>
          ))}
        </div>
      </section>
      {popupState && selectStore && (
        <ShopModal
          popupState={popupState}
          selectStore={selectStore}
          closePopup={closePopup}
        />
      )}
    </>
  );
};
