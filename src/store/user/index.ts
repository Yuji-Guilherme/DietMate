import { UseUserStore } from './types';

import { create } from 'zustand';

const useUserStore = create<UseUserStore>((set) => ({
  state: {
    user: { username: '' }
  },
  actions: {
    addUser: (user) =>
      set((state) => ({
        state: { user: { ...state.state.user, ...user } }
      }))
  }
}));

export { useUserStore };
