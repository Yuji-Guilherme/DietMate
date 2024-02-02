import { InputHTMLAttributes, forwardRef } from 'react';

import { Input } from '@/components/Input';
import { InputButtonType } from '@/components/Input/Button';
import { useRegisterInput } from '../hook';

type RegisterInputProps = {
  label: string;
  errorText: string | undefined;
  buttonType: InputButtonType;
} & InputHTMLAttributes<HTMLInputElement>;

const RegisterInput = forwardRef<HTMLInputElement, RegisterInputProps>(
  ({ label, errorText, buttonType, type = 'text', ...props }, ref) => {
    const { inputId, inputType, handleChangeInputType } = useRegisterInput({
      type
    });

    const hasError = !!errorText;

    return (
      <>
        <Input.Label htmlFor={inputId}>{label}</Input.Label>
        <Input.Wrapper hasError={hasError}>
          <Input.Button type={buttonType} onClick={handleChangeInputType} />
          <Input.Component id={inputId} type={inputType} ref={ref} {...props} />
          {hasError && <Input.ErrorIcon />}
        </Input.Wrapper>
        {hasError && <Input.ErrorMessage>{errorText}</Input.ErrorMessage>}
      </>
    );
  }
);

export { RegisterInput };
