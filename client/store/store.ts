import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | unknown;
  storeToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
   const isLocalStorageAvailable = typeof localStorage !== 'undefined';
  // Check if a token exists in local storage
  const token = isLocalStorageAvailable ? localStorage.getItem('token') : null;
  const initialIsAuthenticated: boolean = !!token; // Convert token existence to boolean
  return {
    token: token,

    isAuthenticated: initialIsAuthenticated,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

    storeToken: (token: string) => {
      if (isLocalStorageAvailable){
        set({ token: token })
        localStorage.setItem('token', token);
        set({ isAuthenticated: true });
      }
    },
    
    removeToken: () => {
      if (isLocalStorageAvailable) {
        set({ token: "" })
        localStorage.removeItem('token');
        set({ isAuthenticated: false });
      }
    }
    
    
  }
});
