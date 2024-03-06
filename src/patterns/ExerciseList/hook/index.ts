import { useId } from 'react';
import { Exercise } from '@/types';
import { useExerciseStore } from '@/store/exercise';

const useExerciseList = (exercises: Exercise[] | undefined) => {
  const menuListId = useId();
  const {
    state: { exercises: searchedExercise },
    actions: { addExercise }
  } = useExerciseStore();

  const buttonAction = (value: string) => {
    if (value.trim() === '') return;

    const searchExerciseItem = exercises?.find(
      (exercise) => exercise.exercise === value
    );

    if (searchExerciseItem) addExercise(searchExerciseItem);
  };

  return { menuListId, searchedExercise, buttonAction };
};

export { useExerciseList };
