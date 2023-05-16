import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | null;
  storeToken: (token: string) => void;
  removeToken: () => void;
  user: any;
  storeUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => {
   const isLocalStorageAvailable = typeof localStorage !== 'undefined';
  // Check if a token exists in local storage
  const token = isLocalStorageAvailable ? localStorage.getItem('token') : null;
  const initialIsAuthenticated: boolean = !!token; // Convert token existence to boolean
  return {
    token: token,

    user: [],
    storeUser: (user: any) => set({user: user}),
    
    isAuthenticated: initialIsAuthenticated,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

    storeToken: (token: string) => {
      if (isLocalStorageAvailable){
        set({ token: token, isAuthenticated: true })
        localStorage.setItem('token', token);
      }
    },
    
    removeToken: () => {
      if (isLocalStorageAvailable) {
        set({ token: "", isAuthenticated: false, user: [] })
        localStorage.removeItem('token');
      }
    }
  }
});
