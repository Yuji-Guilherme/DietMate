import { useId, useState, MouseEvent, HTMLInputTypeAttribute } from 'react';

type UseInputProps = { type: HTMLInputTypeAttribute };

const useInput = ({ type }: UseInputProps) => {
  const inputId = useId();
  const [typeState, setType] = useState<HTMLInputTypeAttribute>('');

  const inputType = typeState || type;
  const iconType: 'eye' | 'user' = type === 'password' ? 'eye' : 'user';

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return { inputId, iconType, inputType, handleButtonClick };
};

export { useInput };
