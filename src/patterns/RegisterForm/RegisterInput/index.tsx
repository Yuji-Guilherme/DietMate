import { InputHTMLAttributes, forwardRef } from 'react';

import { Input } from '@/components/Input';
import { InputButtonType } from '@/components/Input/Button';
import { useRegisterInput } from '../hook';

type RegisterInputProps = {
  label: string;
  errorText: string | undefined;
  touched: boolean | undefined;
  buttonType: InputButtonType;
} & InputHTMLAttributes<HTMLInputElement>;

const RegisterInput = forwardRef<HTMLInputElement, RegisterInputProps>(
  ({ label, errorText, touched, buttonType, type = 'text', ...rest }, ref) => {
    const { inputId, inputType, handleChangeInputType } = useRegisterInput({
      type
    });

    const hasError = !!errorText;
    const isCorrectly = !hasError && !!touched;

    return (
      <>
        <Input.Label htmlFor={inputId}>{label}</Input.Label>
        <Input.Wrapper tabIndex={-1} isValid={isCorrectly} hasError={hasError}>
          <Input.Button type={buttonType} onClick={handleChangeInputType} />
          <Input.Component id={inputId} type={inputType} ref={ref} {...rest} />
          {hasError && <Input.ErrorIcon />}
          {isCorrectly && <Input.CorrectIcon />}
        </Input.Wrapper>
        {hasError && <Input.ErrorMessage>{errorText}</Input.ErrorMessage>}
      </>
    );
  }
);

export { RegisterInput };
