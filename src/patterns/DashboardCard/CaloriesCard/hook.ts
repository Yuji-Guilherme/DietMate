import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useCalories = ({
  caloriesServer
}: {
  caloriesServer: number | undefined;
}) => {
  const [calories, setCalories] = useState<number>();

  useEffect(() => {
    const calories = caloriesServer || getLocalStorage('calories');
    setCalories(calories);
  }, [caloriesServer]);

  return { calories };
};

export { useCalories };
