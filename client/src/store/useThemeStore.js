import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));
