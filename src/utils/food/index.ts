import { get } from '@/services/fetch';
import { useFoodGlobalStore } from '@/store/food';

const setFoods = async () => {
  const dayInSeconds = 86400;

  const result = await get('food', {
    revalidate: dayInSeconds
  });

  useFoodGlobalStore.setState({ state: { foods: result ?? [] } });
};

export { setFoods };
