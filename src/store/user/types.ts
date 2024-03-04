import { User } from '@/types';

export interface StateUserStore {
  user: User;
}

export interface ActionsUserStore {
  addUser: (user: User) => void;
}

export interface UseUserStore {
  state: StateUserStore;
  actions: ActionsUserStore;
}
