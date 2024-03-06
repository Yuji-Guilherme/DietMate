import { createId } from '@/utils/id';
import { UseFoodStore } from './types';

import { create } from 'zustand';

const useFoodGlobalStore = create<Partial<UseFoodStore>>(() => ({
  state: {
    foods: []
  }
}));

const useFoodStore = create<UseFoodStore>((set) => ({
  state: {
    foods: []
  },
  actions: {
    addFood: (food) =>
      set((state) => ({
        state: { foods: [...state.state.foods, { ...food, _id: createId() }] }
      })),
    removeFood: (foodId) =>
      set((state) => ({
        state: {
          foods: state.state.foods.filter((food) => food._id !== foodId)
        }
      }))
  }
}));

export { useFoodStore, useFoodGlobalStore };
