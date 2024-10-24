import { create } from "zustand";

export interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1}))
}));
