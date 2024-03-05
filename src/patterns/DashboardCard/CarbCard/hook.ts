import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useCarb = ({ carbServer }: { carbServer: number | undefined }) => {
  const [carb, setCarb] = useState<number>();

  useEffect(() => {
    const carb = carbServer || getLocalStorage('carb');
    setCarb(carb);
  }, [carbServer]);

  return { carb };
};

export { useCarb };
