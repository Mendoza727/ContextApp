import { create } from "zustand";

interface profileState {
    name: string,
    email: string,
    changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<profileState>()( (set, get) => ({
    name: 'Jhon doe',
    email: 'email@example.com',


    changeProfile: (name: string, email: string) => {
        set({ name, email });
    },
}));