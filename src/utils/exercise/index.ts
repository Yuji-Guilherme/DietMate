import { get } from '@/services/fetch';
import { useExerciseGlobalStore } from '@/store/exercise';

const setExercise = async () => {
  const dayInSeconds = 86400;

  const result = await get('exercise', {
    revalidate: dayInSeconds
  });

  useExerciseGlobalStore.setState({ state: { exercises: result ?? [] } });
};

export { setExercise };
