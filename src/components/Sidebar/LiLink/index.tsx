'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import * as S from './style';

type LiLinkProps = {
  children: ReactNode;
} & LinkProps;

function LiLink({ children, href, ...rest }: LiLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href.toString();

  return (
    <S.Li isActive={isActive}>
      <Link href={href} className={S.linkClassName} {...rest}>
        {children}
      </Link>
    </S.Li>
  );
}

export { LiLink };
