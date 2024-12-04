import { create } from "zustand";

const useGlobalStore = create((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useGlobalStore;