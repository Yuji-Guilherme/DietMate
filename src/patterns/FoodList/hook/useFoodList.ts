import { useId } from 'react';
import { Food } from '@/types';
import { useFoodStore } from '@/store/food';

const useFoodList = (foods: Food[] | undefined) => {
  const menuListId = useId();
  const {
    state: { foods: searchedFoods },
    actions: { addFood }
  } = useFoodStore();

  const buttonAction = (value: string) => {
    if (value.trim() === '') return;

    const searchFoodItems = foods?.find((food) => food.description === value);

    if (searchFoodItems) addFood(searchFoodItems);
  };

  return { menuListId, searchedFoods, buttonAction };
};

export { useFoodList };
