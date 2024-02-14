import { InputHTMLAttributes, forwardRef } from 'react';

import { Input } from '@/components/Input';
import { InputButtonType } from '@/components/Input/Button';
import { useLoginInput } from '../hook';

type LoginInputProps = {
  label: string;
  hasError: boolean;
  buttonType: InputButtonType;
} & InputHTMLAttributes<HTMLInputElement>;

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ label, hasError, buttonType, type = 'text', ...rest }, ref) => {
    const { inputId, inputType, handleChangeInputType } = useLoginInput({
      type
    });

    return (
      <>
        <Input.Label htmlFor={inputId}>{label}</Input.Label>
        <Input.Wrapper tabIndex={-1} hasError={hasError}>
          <Input.Button
            type={buttonType}
            inputType={inputType}
            onClick={handleChangeInputType}
          />
          <Input.Component id={inputId} type={inputType} ref={ref} {...rest} />
        </Input.Wrapper>
        {hasError && (
          <Input.ErrorMessage>Usuário e/ou senha incorretas</Input.ErrorMessage>
        )}
      </>
    );
  }
);

export { LoginInput };
