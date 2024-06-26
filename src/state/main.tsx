import { create } from "zustand";

export const useAppStore: any = create((set: any) => ({
  isDarkTheme: localStorage.getItem("theme") === "dark",
  setIsDarkTheme: (v: boolean) => {
    localStorage.setItem("theme", v ? "dark" : "light");
    set({ isDarkTheme: v });
  },
  isLoggedIn: !!localStorage.getItem("access"),
}));
