'use client';

import type { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { SideBarIcon, SideBarIconType } from './Icon';

import * as S from './style';

type LiLinkProps = {
  children: ReactNode;
  type: SideBarIconType;
} & LinkProps;

function LiLink({ children, href, type, ...props }: LiLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href.toString();

  return (
    <S.Li isActive={isActive}>
      <Link href={href} className={S.linkClassName} {...props}>
        <SideBarIcon type={type} isActive={isActive} />
        {children}
      </Link>
    </S.Li>
  );
}

export { LiLink };
