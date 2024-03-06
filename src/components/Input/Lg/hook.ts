import { useRef, useId, useState } from 'react';

const useInputLg = (buttonAction: (value: string) => void) => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputState, setInputState] = useState('');

  const focusInput = () => inputRef.current?.focus();

  const clearInput = () => setInputState('');

  const handleClickButton = () => {
    buttonAction(inputState);
    clearInput();
    focusInput();
  };

  return {
    inputId,
    inputRef,
    inputState,
    setInputState,
    focusInput,
    clearInput,
    handleClickButton
  };
};

export { useInputLg };
