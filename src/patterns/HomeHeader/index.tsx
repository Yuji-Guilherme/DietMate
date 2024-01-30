import { Bitter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './style';

const bitter = Bitter({ subsets: ['latin'] });

function HomeHeader() {
  return (
    <S.Header>
      <Link href="">
        <S.LogoWrapper>
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <S.LogoText className={bitter.className}>Diet Mate</S.LogoText>
        </S.LogoWrapper>
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
