import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useFat = ({ fatServer }: { fatServer: number | undefined }) => {
  const [fat, setFat] = useState<number>();

  useEffect(() => {
    const fat = fatServer || getLocalStorage('fat');
    setFat(fat);
  }, [fatServer]);

  return { fat };
};

export { useFat };
