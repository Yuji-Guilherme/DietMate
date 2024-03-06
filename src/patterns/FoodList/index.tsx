'use client';

import { Food } from '@/types';
import { Input } from '@/components/Input';
import { useFoodList } from './hook';
import { FoodCard } from './FoodCard';

import * as S from './style';

function FoodList({ foods }: { foods: Food[] | undefined }) {
  const { menuListId, searchedFoods, buttonAction } = useFoodList(foods);

  return (
    <>
      <Input.Lg
        list={menuListId}
        buttonAction={buttonAction}
        placeholder="Procure por um alimento..."
      />
      <datalist id={menuListId}>
        {!foods && <option value="carregando..." />}
        {foods &&
          foods.map((food) => (
            <option key={food.number} value={food.description} />
          ))}
      </datalist>
      <S.Ul>
        {searchedFoods &&
          searchedFoods.map((food) => <FoodCard {...food} key={food._id} />)}
      </S.Ul>
    </>
  );
}

export { FoodList };
