import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      error: null,
      isLoading: false,
      isAuthenticate: false,

      // login
      login: async ({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) => {
        set({ isLoading: true, error: null });
        try {
          const { data } = await axios.post(
            "http://localhost:8787/api/v1/login",
            {
              email,
              password,
            },
          );
          set({ isLoading: false, error: null, token: data });
        } catch (error: any) {
          console.log("Error while login: ", error);
          set({ isLoading: false, error: error.message, token: null });
        }
      },
    }),
    {
      name: "token",
    },
  ),
);

export default useAuthStore;
