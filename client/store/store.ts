import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | unknown;
  storeToken: (token: string) => void;
  removeToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  // Check if a token exists in local storage
  const token = localStorage.getItem('token');
  const initialIsAuthenticated: boolean = !!token; // Convert token existence to boolean
  return {
    token: token,

    isAuthenticated: initialIsAuthenticated,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

    storeToken: (token: string) => {
      set({ token: token })
      localStorage.setItem('token', token);
      set({ isAuthenticated: true });
    },
    
    removeToken: () => {
      set({ token: "" })
      localStorage.removeItem('token');
      set({ isAuthenticated: false });
    }
    
    
  }
});
