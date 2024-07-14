import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IUserMeta } from '../interface';

interface UserState {
  isLoggedIn: boolean;
  userMeta: IUserMeta,
  setUserMeta: (payload: IUserMeta) => void;
  clearStore: () => void
}

const initialState: UserState = {
  isLoggedIn: false,
  userMeta: {
    email: '',
    name: '',
    team: '',
    role: ''
  },
  setUserMeta: function (payload: IUserMeta): void {
    throw new Error('Function not implemented.');
  },
  clearStore: function (): void {
    throw new Error('Function not implemented.');
  }
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setUserMeta(payload: IUserMeta) {
          set({ userMeta: payload })
      },
      clearStore() {
          set({ ...initialState })
      },
    }),    {
      name: 'userMeta',
    },
  ),
)