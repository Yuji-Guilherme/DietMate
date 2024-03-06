import { FoodList } from '@/patterns/FoodList';
import { useFoodGlobalStore } from '@/store/food';
import { useExerciseGlobalStore } from '@/store/exercise';
import { setFoods } from '@/utils/food';
import { setExercise } from '@/utils/exercise';

import * as S from './style';
import { ExerciseList } from '@/patterns/ExerciseList';

async function ListScreen() {
  await Promise.all([setFoods(), setExercise()]);
  const foodState = useFoodGlobalStore.getState().state;
  const exerciseState = useExerciseGlobalStore.getState().state;

  return (
    <S.Main>
      <S.Section>
        <S.Title>Alimento</S.Title>
        <FoodList foods={foodState?.foods} />
      </S.Section>
      <S.Section>
        <S.Title>Exercícios</S.Title>
        <ExerciseList exercises={exerciseState?.exercises} />
      </S.Section>
    </S.Main>
  );
}

export { ListScreen };
