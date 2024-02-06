import Image from 'next/image';
import { Bitter } from 'next/font/google';

import * as S from './style';

const bitter = Bitter({ subsets: ['latin'] });

type LogoType = 'sm' | 'lg' | 'aside';

type LogoProps = {
  type: LogoType;
};

function Logo({ type }: LogoProps) {
  const components: Record<LogoType, JSX.Element> = {
    sm: (
      <S.LogoSmWrapper>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <S.LogoSmText className={bitter.className}>Diet Mate</S.LogoSmText>
      </S.LogoSmWrapper>
    ),
    lg: (
      <S.LogoLgWrapper>
        <S.LogoLgText className={bitter.className}>Diet Mate</S.LogoLgText>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </S.LogoLgWrapper>
    ),
    aside: (
      <S.LogoAsideWrapper>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <S.LogoAsideText className={bitter.className}>
          Diet Mate
        </S.LogoAsideText>
      </S.LogoAsideWrapper>
    )
  };

  return components[type] ?? null;
}

export { Logo };
