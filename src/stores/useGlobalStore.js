import { create } from "zustand";

const useGlobalStore = create((set) => ({
  isActive: false,
  setIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));

export default useGlobalStore;