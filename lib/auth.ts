import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: string;
  name: string;
  role: 'vendedor' | 'bodeguero' | 'admin';
};

type AuthStore = {
  user: User | null;
  error: string | null;
  login: (credentials: { username: string; password: string; role: User['role'] }) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
};

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      error: null,
      login: async (credentials) => {
        try {
          const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
          });
          
          if (!response.ok) {
            throw new Error('Credenciales incorrectas');
          }

          const data = await response.json();
          set({ 
            user: {
              id: data.user._id,
              name: data.user.name,
              role: data.user.role
            },
            error: null 
          });
          return true;
        } catch (error) {
          set({ error: (error as Error).message });
          setTimeout(() => set({ error: null }), 3000);
          return false;
        }
      },
      logout: () => {
        set({ user: null, error: null });
      },
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);