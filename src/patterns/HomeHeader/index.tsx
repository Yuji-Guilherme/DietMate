import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

import * as S from './style';

function HomeHeader() {
  return (
    <S.Header>
      <Link href="">
        <Logo type="sm" />
      </Link>
      <S.Nav>
        <S.NavLinkWrapper>
          <Link className={S.VisitLinkClassName} href="/dashboard">
            visitante
          </Link>
        </S.NavLinkWrapper>
        <Link href="https://github.com/Yuji-Guilherme/DietMate" target="_blank">
          <Image
            src="/icons/github-mark.svg"
            alt="github logo"
            width={32}
            height={32}
          />
        </Link>
      </S.Nav>
    </S.Header>
  );
}

export { HomeHeader };
