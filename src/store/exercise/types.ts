import { Exercise } from '@/types';

export interface UseExerciseStore {
  state: StateExerciseStore;
  actions: ActionsExerciseStore;
}

export interface StateExerciseStore {
  exercises: Exercise[];
}

export interface ActionsExerciseStore {
  addExercise: (exercise: Exercise) => void;
  removeExercise: (exerciseId: string) => void;
}
