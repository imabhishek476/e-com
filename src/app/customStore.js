import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const customStore = (set, get) => ({
  // page: { currentPage: 0, pageStack: [] },
  // customProductId: "",
  // size: [],
  // color: [],
  // front: {
  //   text: { text: "", fontFamily: "", color: "" },
  //   image: [],
  //   preview: ""
  // },
  // back: {
  //   text: { text: "", fontFamily: "", color: "" },
  //   image: [],
  //   preview: ""
  // },
  // createdAt: {},
  // updatedAt: {},
  frontFabric: null,
  backFabric: null,
  canvasSide: "front",
  frontPreview: null,
  backPreview: null,
  add: (states) => {
    set((state) => ({
      ...state,
      design: [...state.design, states]
    }));
  },
  saveFrontFabricState: (data) => {
    set((state) => ({
      ...state,
      frontFabric: data
    }));
  },
  saveBackFabricState: (data) => {
    set((state) => ({
      ...state,
      backFabric: data
    }));
  },
  loadFrontFabricState: () => {
    return get().frontFabric;
  },
  loadBackFabricState: () => {
    return get().backFabric;
  },
  setCanvasSide: (side) => {
    set((state) => ({
      ...state,
      canvasSide: side
    }));
  },
  setPreview:(dataImg)=>{
    set((state)=>({
      ...state,
      ...dataImg
      // frontPreview:dataImg.front,
      // backPreview:dataImg.back
    }))
  }
});

const useCustomStore = create(
  devtools(persist(customStore, { name: "fabric-store" }))
);

export default useCustomStore;
