import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const customStore = (set) => ({
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
  add: (states) => {
    set((state) => ({
      design: [...state.design, states]
    }));
  }
});

const useCustomStore = create(customStore);

export default useCustomStore;
