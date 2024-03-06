import { Food } from '@/types';
import { PenIcon } from './Icon';
import { useFoodCard } from '../hook';
import { useFoodStore } from '@/store/food';

import * as S from '../style';

function FoodCard({ description, calories, carbs, protein, fat, _id }: Food) {
  const {
    grams,
    isGramsEdited,
    setIsGramsEdited,
    handleCalSubmit,
    penPathStyle,
    caloriesNumber,
    carbNumber,
    fatNumber,
    proteinNumber
  } = useFoodCard({ calories, carbs, protein, fat });

  const {
    actions: { removeFood }
  } = useFoodStore();

  return (
    <S.CardRoot>
      <S.CardTitle>{description}</S.CardTitle>
      <S.CardCloseButton onClick={() => removeFood(_id!)}>x</S.CardCloseButton>
      <S.CardInfoWrapper>
        <S.CardInfoTitleWrapper className="ml-5 gap-1">
          <S.CardEditButton onClick={() => setIsGramsEdited((prev) => !prev)}>
            <PenIcon
              className="mt-1 w-[10px] h-3 transition-colors"
              pathStyle={penPathStyle}
            />
          </S.CardEditButton>
          <S.CardGramsInput
            type="number"
            min={1}
            max={1000}
            value={grams}
            disabled={!isGramsEdited}
            onChange={handleCalSubmit}
            onBlur={() => setIsGramsEdited(false)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setIsGramsEdited(false);
            }}
          />
        </S.CardInfoTitleWrapper>
        <S.CardInfoLabel>gramas</S.CardInfoLabel>
      </S.CardInfoWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitleWrapper>
          <S.CardCircle className="bg-new-red" />
          <S.CardInfoTitle>{proteinNumber}g</S.CardInfoTitle>
        </S.CardInfoTitleWrapper>
        <S.CardInfoLabel>proteínas</S.CardInfoLabel>
      </S.CardInfoWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitleWrapper>
          <S.CardCircle className="bg-dark-yellow" />
          <S.CardInfoTitle>{carbNumber}g</S.CardInfoTitle>
        </S.CardInfoTitleWrapper>
        <S.CardInfoLabel>carboidratos</S.CardInfoLabel>
      </S.CardInfoWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitleWrapper>
          <S.CardCircle className="bg-new-orange" />
          <S.CardInfoTitle>{fatNumber}g</S.CardInfoTitle>
        </S.CardInfoTitleWrapper>
        <S.CardInfoLabel>gorduras</S.CardInfoLabel>
      </S.CardInfoWrapper>
      <S.CardInfoWrapper>
        <S.CardInfoTitle>{caloriesNumber}kcal</S.CardInfoTitle>
        <S.CardInfoLabel>calorias</S.CardInfoLabel>
      </S.CardInfoWrapper>
    </S.CardRoot>
  );
}

export { FoodCard };
