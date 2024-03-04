import { Logo } from '@/components/Logo';
import { ExitButton } from './ExitButton';
import { LiLink } from './LiLink';
import { useUserStore } from '@/store/user';
import { fetchLogout } from '@/services/fetch';
import { userIsLogged } from '@/utils/user';

import * as S from './style';

function Sidebar() {
  const { user } = useUserStore.getState().state;

  return (
    <S.Aside>
      <Logo type="aside" />
      <S.Nav>
        <S.Ul>
          <LiLink type="dashboard" href="/dashboard">
            DashBoard
          </LiLink>
          <LiLink type="forkKnife" href="/dashboard/diet">
            Dieta
          </LiLink>
          <LiLink type="dumbbell" href="/dashboard/workout">
            Treino
          </LiLink>
          <LiLink type="list" href="/dashboard/list">
            Lista
          </LiLink>
          <LiLink type="user" href="/dashboard/user">
            <S.UserText>{user.username || 'visitante'}</S.UserText>
          </LiLink>
        </S.Ul>
      </S.Nav>
      <ExitButton fetchFn={fetchLogout} userIsLoggedFn={userIsLogged} />
    </S.Aside>
  );
}

export { Sidebar };
