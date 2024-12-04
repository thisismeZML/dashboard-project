import { create } from "zustand";

export const useSaleStore = create((set) => ({
  records: [],
  addRecord: (newRecord) =>
    set((state) => ({ records: [...state.records, newRecord] })),
  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    })),
  updateQuantity: (id, amount) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(amount);
          const newCost = parseInt(record.price) * parseInt(newQuantity);
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    })),
  resetRecord: () => set({ records: [] }),
}));
