import { useId, useState, MouseEvent, HTMLInputTypeAttribute } from 'react';

type UseLoginInputProps = { type: HTMLInputTypeAttribute };

const useLoginInput = ({ type }: UseLoginInputProps) => {
  const inputId = useId();
  const [typeState, setType] = useState<HTMLInputTypeAttribute>('');

  const inputType = typeState || type;

  const handleChangeInputType = (e: MouseEvent) => {
    e.preventDefault();
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return { inputId, inputType, handleChangeInputType };
};

export { useLoginInput };
