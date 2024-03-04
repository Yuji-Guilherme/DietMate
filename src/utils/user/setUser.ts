import { useUserStore } from '@/store/user';
import { get } from '@/services/fetch';
import { getCookies } from '@/utils/cookies';

const setUser = async () => {
  const [tokenCookie, refreshCookie] = getCookies();

  if (!tokenCookie && !refreshCookie) {
    useUserStore.setState({
      state: {
        user: {
          username: 'visitante'
        }
      }
    });
  }

  if (tokenCookie && refreshCookie) {
    const { user } = await get('user', { tags: ['user'], revalidate: 3600 });
    useUserStore.setState({
      state: {
        user: { username: user.username }
      }
    });
  }
};

export { setUser };
