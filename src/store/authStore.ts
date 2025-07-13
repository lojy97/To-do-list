import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,

  login: (username, password) => {
    // Example validation: username required, password >= 8 chars & has a number
    const valid =
      username.trim().length > 0 &&
      password.length >= 8 &&
      /\d/.test(password);

    if (valid) {
      set({ isAuthenticated: true });
      sessionStorage.setItem('isAuthenticated', 'true'); // Optional: persist session
      return true;
    }

    return false;
  },

  logout: () => {
    set({ isAuthenticated: false });
    sessionStorage.removeItem('isAuthenticated');
  },
}));

export default useAuthStore;
