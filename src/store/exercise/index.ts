import { createId } from '@/utils/id';
import { UseExerciseStore } from './types';

import { create } from 'zustand';

const useExerciseGlobalStore = create<Partial<UseExerciseStore>>(() => ({
  state: {
    exercises: []
  }
}));

const useExerciseStore = create<UseExerciseStore>((set) => ({
  state: {
    exercises: []
  },
  actions: {
    addExercise: (exercise) =>
      set((state) => ({
        state: {
          exercises: [
            ...state.state.exercises,
            { ...exercise, _id: createId() }
          ]
        }
      })),
    removeExercise: (exerciseId) =>
      set((state) => ({
        state: {
          exercises: state.state.exercises.filter(
            (exercise) => exercise._id !== exerciseId
          )
        }
      }))
  }
}));

export { useExerciseStore, useExerciseGlobalStore };
