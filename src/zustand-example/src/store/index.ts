import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface IUser {
  id: number;
  username: string;
  email: string;
}

interface IUsersState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  getUsers: () => void;
}

export const useUsers = create<IUsersState>()(
  persist(
    devtools((set) => ({
      users: [],
      isLoading: false,
      error: "",
      getUsers: async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=10"
        );
        const data = (await response.json()) as IUser[];
        set({ users: data });
      },
    })),
    { name: "usersStore", version: 1 }
  )
);

export const useCounter = create<ICounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
