import { useUserStore } from '@/store/user';
import { get } from '@/services/fetch';
import { getCookies } from '@/utils/cookies';

const setUser = async () => {
  const [tokenCookie, refreshCookie] = getCookies();
  const hourInSeconds = 3600;

  if (tokenCookie && refreshCookie) {
    const { user } = await get('user', {
      tags: ['user'],
      revalidate: hourInSeconds
    });
    useUserStore.setState({
      state: {
        user: {
          username: user.username,
          preference: user.preference,
          diet: user.diet,
          workout: user.workout
        }
      }
    });
  }
};

export { setUser };
