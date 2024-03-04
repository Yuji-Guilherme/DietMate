'use client';

import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';

import * as S from '../style';
import { useExit } from '../hook';

type ExitButtonProps = {
  fetchFn: () => Promise<void>;
  userIsLoggedFn: () => Promise<boolean>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ExitButton({ fetchFn, userIsLoggedFn, ...props }: ExitButtonProps) {
  const { handleCloseButton } = useExit({ fetchFn, userIsLoggedFn });

  return (
    <S.ExitButtonWrapper>
      <S.ExitButton {...props} onClick={handleCloseButton}>
        <Image
          width={16}
          height={16}
          src="/icons/exit.svg"
          alt="logo de sair"
        />
        Sair
      </S.ExitButton>
    </S.ExitButtonWrapper>
  );
}

export { ExitButton };
