import Image from 'next/image';

import * as S from './style';
import { getCookies } from '@/utils/Cookies';
import { get, getNewToken } from '@/services/fetch';

async function getUsername() {
  const [tokenCookie, refreshCookie] = getCookies();

  if (refreshCookie && tokenCookie) {
    const data = await get('user', { tags: ['username'] });
    return data.user.username;
  }
  if (refreshCookie && !tokenCookie) {
    getNewToken();
    const data = await get('user', { tags: ['username'] });
    return data.user.username;
  }

  return 'visitante';
}

async function UserTopBar() {
  const username = await getUsername();

  return (
    <S.Wrapper>
      <S.toggleButton>
        <S.Text>{username}</S.Text>
        <Image src="/icons/user.svg" alt="user icon" width={16} height={16} />
      </S.toggleButton>
      <div className="bg-zinc-300/20 rounded-b-xl p-2 flex items-center justify-center gap-2">
        <span className="w-4 h-4 bg-primary-blue" />
        <p className="text-xs text-primary-blue">Sair</p>
      </div>
    </S.Wrapper>
  );
}

export { UserTopBar };
