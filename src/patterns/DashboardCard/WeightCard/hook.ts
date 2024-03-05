import { useEffect, useState } from 'react';
import { getLocalStorage } from '@/utils/localStorage';

const useWeight = ({
  currentWeightServer,
  targetWeightServer
}: {
  currentWeightServer: number | undefined;
  targetWeightServer: number | undefined;
}) => {
  const [currentWeight, setCurrentWeight] = useState<number>();
  const [targetWeight, setTargetWeight] = useState<number>();

  useEffect(() => {
    const currentWeight =
      currentWeightServer || getLocalStorage('currentWeight');

    const targetWeight = targetWeightServer || getLocalStorage('targetWeight');

    setCurrentWeight(currentWeight);
    setTargetWeight(targetWeight);
  }, [currentWeightServer, targetWeightServer]);

  return { currentWeight, targetWeight };
};

export { useWeight };
