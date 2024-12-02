import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: "",
  setToken: (token) => set({ token }),
  removeToken: () => set({ token: "" }),
}));

export default useTokenStore;