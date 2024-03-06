'use client';

import Image from 'next/image';
import type { InputHTMLAttributes } from 'react';

import * as S from '../style';
import { useInputLg } from './hook';

type InputLgProps = {
  buttonAction: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function InputLg({ buttonAction, ...props }: InputLgProps) {
  const {
    inputId,
    inputRef,
    inputState,
    setInputState,
    handleClickButton,
    clearInput,
    focusInput
  } = useInputLg(buttonAction);

  return (
    <S.InputLgWrapper>
      <label htmlFor={inputId} onClick={focusInput}>
        <Image
          src="/icons/search.svg"
          alt="ícone de lupa"
          width={11}
          height={11}
        />
      </label>
      <S.InputLg
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleClickButton();
        }}
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        id={inputId}
        ref={inputRef}
        {...props}
      />
      {inputState !== '' && (
        <S.InputLgCloseButton
          className="text-sm"
          onClick={() => {
            clearInput();
            focusInput();
          }}
        >
          x
        </S.InputLgCloseButton>
      )}
      <S.InputLgAddButton onClick={() => handleClickButton()}>
        +
      </S.InputLgAddButton>
    </S.InputLgWrapper>
  );
}

export { InputLg };
