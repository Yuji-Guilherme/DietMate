import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useProtein = ({
  proteinServer
}: {
  proteinServer: number | undefined;
}) => {
  const [protein, setProtein] = useState<number>();

  useEffect(() => {
    const protein = proteinServer || getLocalStorage('protein');
    setProtein(protein);
  }, [proteinServer]);

  return { protein };
};

export { useProtein };
