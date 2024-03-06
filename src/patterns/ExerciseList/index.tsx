'use client';

import { Exercise } from '@/types';
import { Input } from '@/components/Input';
import { useExerciseList } from './hook';

import * as S from './style';
import { ExerciseCard } from './ExerciseCard';

function ExerciseList({ exercises }: { exercises: Exercise[] | undefined }) {
  const { menuListId, searchedExercise, buttonAction } =
    useExerciseList(exercises);

  return (
    <>
      <Input.Lg
        list={menuListId}
        buttonAction={buttonAction}
        placeholder="Procure por um exercício..."
      />
      <datalist id={menuListId}>
        {!exercises && <option value="carregando..." />}
        {exercises &&
          exercises.map((exercises) => (
            <option key={exercises.number} value={exercises.exercise} />
          ))}
      </datalist>
      <S.Ul>
        {searchedExercise &&
          searchedExercise.map((exercise) => (
            <ExerciseCard key={exercise._id} {...exercise} />
          ))}
      </S.Ul>
    </>
  );
}

export { ExerciseList };
