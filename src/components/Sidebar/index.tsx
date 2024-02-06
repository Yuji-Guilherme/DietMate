import { Logo } from '../Logo';
import { LiLink } from './LiLink';

import * as S from './style';

function Sidebar() {
  return (
    <S.Aside>
      <Logo type="aside" />
      <S.Nav>
        <S.Ul>
          <LiLink href="/dashboard">DashBoard</LiLink>
          <LiLink href="/dashboard/diet">Dieta</LiLink>
          <LiLink href="/dashboard/workout">Treino</LiLink>
          <LiLink href="/dashboard/list">Lista</LiLink>
          <LiLink href="/dashboard/user">Usuário</LiLink>
        </S.Ul>
      </S.Nav>
    </S.Aside>
  );
}

export { Sidebar };
