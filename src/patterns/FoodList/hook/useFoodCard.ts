import { type CSSProperties, useState } from 'react';

type useFoodCardProps = {
  carbs: number;
  fat: number;
  protein: number;
  calories: number;
};

const useFoodCard = ({ calories, carbs, fat, protein }: useFoodCardProps) => {
  const [isGramsEdited, setIsGramsEdited] = useState<boolean>(false);
  const [grams, setGrams] = useState<string>('100');

  const [carbNumber, fatNumber, proteinNumber, caloriesNumber] = [
    carbs,
    fat,
    protein,
    calories
  ].map((number) => parseFloat(((number * parseInt(grams)) / 100).toFixed(1)));

  const handleCalSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) > 1000) return setGrams('1000');
    if (parseInt(e.target.value) < 1) return setGrams('1');
    setGrams(e.target.value);
  };

  const penPathStyle: CSSProperties = {
    fill: isGramsEdited ? '#031818' : 'none'
  };

  return {
    grams,
    isGramsEdited,
    setIsGramsEdited,
    carbNumber,
    fatNumber,
    proteinNumber,
    caloriesNumber,
    handleCalSubmit,
    penPathStyle
  };
};

export { useFoodCard };
