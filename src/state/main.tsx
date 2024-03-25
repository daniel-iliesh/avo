import { create } from 'zustand'

export const useAppStore = create((set) => ({
   isLoggedIn: () => !!localStorage.getItem("access")
}))