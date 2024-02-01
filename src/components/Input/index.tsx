import { InputHTMLAttributes, forwardRef } from 'react';
import { useInput } from './hook';
import { InputButton } from './Button';
import { ErrorIcon } from './Icon';

import * as S from './style';

type InputProps = {
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', label, errorMessage, ...props }, ref) => {
    const hasError = !!errorMessage;
    const { inputId, iconType, inputType, handleButtonClick } = useInput({
      type
    });

    return (
      <>
        <S.Label htmlFor={inputId}>{label}</S.Label>
        <S.InputWrapper hasError={hasError}>
          <InputButton type={iconType} onClick={handleButtonClick} />
          <S.Input id={inputId} type={inputType} ref={ref} {...props} />
          {hasError && <ErrorIcon />}
        </S.InputWrapper>
        {hasError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </>
    );
  }
);

export { Input };
