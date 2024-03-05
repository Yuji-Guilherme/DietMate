import { useRouter } from 'next/navigation';
import { clearLocalStorage } from '@/utils/localStorage';

type UseExitProps = {
  fetchFn: () => Promise<void>;
  userIsLoggedFn: () => Promise<boolean>;
};

const useExit = ({ fetchFn, userIsLoggedFn }: UseExitProps) => {
  const router = useRouter();

  const handleCloseButton = async () => {
    const userLoginState = await userIsLoggedFn();
    if (userLoginState) await fetchFn();
    clearLocalStorage();
    router.push('/');
  };

  return { handleCloseButton };
};

export { useExit };
