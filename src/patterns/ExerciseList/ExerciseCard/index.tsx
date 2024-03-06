import { Exercise } from '@/types';

import * as S from '../style';
import { useExerciseStore } from '@/store/exercise';

function ExerciseCard({ exercise, muscle, _id }: Exercise) {
  const {
    actions: { removeExercise }
  } = useExerciseStore();

  return (
    <S.CardRoot>
      <S.CardInfoWrapper>
        <S.CardTitle>{exercise}</S.CardTitle>
        <S.CloseButton onClick={() => removeExercise(_id!)}>x</S.CloseButton>
      </S.CardInfoWrapper>
      <S.CardInfoWrapper>
        <S.CardSubtitle>Músculo:</S.CardSubtitle>
        <S.CardInfo>{muscle}</S.CardInfo>
      </S.CardInfoWrapper>
    </S.CardRoot>
  );
}

export { ExerciseCard };
