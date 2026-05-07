import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

type Success = {
  success: boolean;
};

interface AuthState {
  user: any | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  register: (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<Success>;
  login: (data: { email: string; password: string }) => Promise<Success>;
  logout: () => void;
  generateUrl: (data: { origin: string }) => Promise<void>;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8787";

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      error: null,
      isLoading: false,
      isAuthenticated: false,

      // register
      register: async ({ username, email, password, confirmPassword }) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_URL}/api/v1/auth/register`, {
            username,
            email,
            password,
            confirmPassword,
          });
          const { token, user } = res.data;
          set({
            token,
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return { success: true };
        } catch (err: unknown) {
          let message = "Registation failed";
          if (axios.isAxiosError(err)) {
            message = err.message || err.response?.data?.message;
          }
          set({
            error: message,
            isAuthenticated: false,
            isLoading: false,
            token: null,
          });
          return { success: false };
        }
      },

      // login
      login: async ({ email, password }) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_URL}/api/v1/auth/login`, {
            email,
            password,
          });
          const { token, user } = res.data;
          set({
            token,
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return { success: true };
        } catch (err: unknown) {
          let message = "Login failed";
          if (axios.isAxiosError(err)) {
            message = err.message || err.response?.data?.message;
          }
          set({
            error: message,
            isAuthenticated: false,
            isLoading: false,
            token: null,
          });
          return { success: false };
        }
      },

      // logout
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },

      // generate url
      generateUrl: async ({ origin }) => {
        set({ isLoading: true });
        try {
          const token = get().token;

          const res = await axios.post(
            `${API_URL}/api/v1/app/create`,
            {
              origin,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          set({ isLoading: false });
          console.log(res.data);
        } catch (e: any) {
          set({ isLoading: false });
          console.log(e.message);
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    },
  ),
);

export default useAuthStore;
