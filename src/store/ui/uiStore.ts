import { create } from 'zustand'
import { DASHBOARD_LINKS } from '../../common/strings';

interface UIState {
  activeView: string,
  loading: boolean,
  showSkipModal: boolean,
  showInviteModal: boolean,
  setActiveView: (payload: string) => void,
  setSkipModalVisibility: () => void;
  setInviteModalVisibility: () => void;
  clearStore: () => void;
}

const initialState: UIState = {
  activeView: DASHBOARD_LINKS.MASTERY,
  loading: false,
  showSkipModal: false,
  showInviteModal: false,
  setActiveView: function (payload: string): void {
    throw new Error('Function not implemented.');
  },
  setSkipModalVisibility: function (): void {
    throw new Error('Function not implemented.');
  },
  setInviteModalVisibility: function (): void {
    throw new Error('Function not implemented.');
  },
  clearStore: function (): void {
    throw new Error('Function not implemented.');
  }
}

export const useUIStore = create<UIState>()(
  (set) => ({
    ...initialState,
    setActiveView: (payload: string) => set((state) => ({
      ...state,
      activeView: payload
    })),
    setSkipModalVisibility() {
        set((state) => ({...state, showSkipModal:!state.showSkipModal }))
    },
    setInviteModalVisibility() {
        set((state) => ({...state, showInviteModal:!state.showInviteModal }))
    },
    clearStore() {
        set({ ...initialState })
    },
  }),
)