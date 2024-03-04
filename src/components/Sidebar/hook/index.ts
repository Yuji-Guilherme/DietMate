import { useRouter } from 'next/navigation';

type UseExitProps = {
  fetchFn: () => Promise<void>;
  userIsLoggedFn: () => Promise<boolean>;
};

const useExit = ({ fetchFn, userIsLoggedFn }: UseExitProps) => {
  const router = useRouter();

  const handleCloseButton = async () => {
    const userLoginState = await userIsLoggedFn();
    if (userLoginState) await fetchFn();
    router.push('/');
  };

  return { handleCloseButton };
};

export { useExit };
