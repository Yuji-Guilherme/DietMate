import { InputHTMLAttributes, forwardRef } from 'react';

import { Input } from '@/components/Input';
import { InputButtonType } from '@/components/Input/Button';
import { useLoginInput } from '../hook';

type LoginInputProps = {
  label: string;
  errorText?: string;
  buttonType: InputButtonType;
} & InputHTMLAttributes<HTMLInputElement>;

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ label, errorText, buttonType, type = 'text', ...rest }, ref) => {
    const { inputId, inputType, handleChangeInputType } = useLoginInput({
      type
    });

    const hasError = !!errorText;

    return (
      <>
        <Input.Label htmlFor={inputId}>{label}</Input.Label>
        <Input.Wrapper tabIndex={-1} hasError={hasError}>
          <Input.Button type={buttonType} onClick={handleChangeInputType} />
          <Input.Component id={inputId} type={inputType} ref={ref} {...rest} />
        </Input.Wrapper>
        {hasError && <Input.ErrorMessage>{errorText}</Input.ErrorMessage>}
      </>
    );
  }
);

export { LoginInput };
