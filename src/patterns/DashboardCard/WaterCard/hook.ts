import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useWater = ({ waterServer }: { waterServer: number | undefined }) => {
  const [water, setWater] = useState<number>();
  const plural = () => {
    if (water && water > 1) return 's';
    return '';
  };

  useEffect(() => {
    const water = waterServer || getLocalStorage('water');
    setWater(water);
  }, [waterServer]);

  return { water, plural };
};

export { useWater };
