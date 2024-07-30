import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const customStore = (set, get) => ({
  page: { currentPage: 0, pageStack: [] },
  customProductId:"",
  size: [],
  color: [],
  front: {
    text: { text: "", fontFamily: "", color: "" },
    image: [],
    preview: ""
  },
  back: {
    text: { text: "", fontFamily: "", color: "" },
    image: [],
    preview: ""
  },
  createdAt: {},
  updatedAt: {},
  frontFabric: null,
  backFabric: null,
  add: (states) => {
    set((state) => ({
      design: [...state.design, states]
    }));
  },
  saveFrontFabricState: (data)=>{
    set((state) => ({
      frontFabric: data
    }));
  },
  saveBackFabricState: (data) => {
    set((state) => ({
      backFabric: data
    }));
  },
  loadFrontFabricState: () => {
    return get().frontFabric;
  },
  loadBackFabricState: () => {
    return get().backFabric;
  }
});

const useCustomStore = create(devtools(persist(customStore, { name: "fabric-store" })));

export default useCustomStore;
