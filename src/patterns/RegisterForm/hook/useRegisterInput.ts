import { useId, useState, MouseEvent, HTMLInputTypeAttribute } from 'react';

type UseRegisterInputProps = {
  type: HTMLInputTypeAttribute;
  errorText: string | undefined;
  touched: boolean | undefined;
};

const useRegisterInput = ({
  type,
  errorText,
  touched
}: UseRegisterInputProps) => {
  const inputId = useId();
  const [typeState, setType] = useState<HTMLInputTypeAttribute>('');

  const inputType = typeState || type;

  const hasError = !!errorText;

  const isCorrectly = !hasError && !!touched;

  const handleChangeInputType = (e: MouseEvent) => {
    e.preventDefault();
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return { inputId, inputType, hasError, isCorrectly, handleChangeInputType };
};

export { useRegisterInput };
