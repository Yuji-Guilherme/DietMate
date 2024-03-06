import { HTMLFactory } from 'react';
import tw from 'tailwind-styled-components';

type StyledInputWrapperProps = {
  hasError?: boolean;
  isValid?: boolean;
} & HTMLFactory<HTMLDivElement>;

const Label = tw.label`
  w-fit
  text-slate-600
  font-medium
  cursor-pointer
`;

const InputWrapper = tw.div<StyledInputWrapperProps>`
  bg-amber-50
  w-full
  h-9
  flex
  items-center
  px-2
  rounded-lg
  hover:outline
  hover:outline-1
  hover:outline-slate-600
  focus-within:outline
  focus-within:outline-2
  focus-within:outline-slate-600
  ${(p) => (p.hasError ? 'outline outline-red-500 outline-1' : '')}
  ${(p) => (p.isValid ? 'outline outline-emerald-500 outline-1' : '')}
  group
  transition-colors
`;

const Input = tw.input`
  bg-transparent
  w-full
  text-sm
  outline-none
  ml-2
`;

const iconClassName = 'w-3 h-3 right-9 top-12 mr-1';

const errorPathClassName = 'fill-red-600';

const correctPathClassName = 'fill-emerald-600';

const ErrorMessage = tw.p`
  text-xs
  text-red-500
`;

const InputLgWrapper = tw.div`
  w-full
  max-w-2xl
  h-10
  flex
  items-center
  bg-secondary-white
  rounded-xl
  px-4
  gap-2
`;

const InputLg = tw.input`
  w-full
  px-1
  bg-transparent
  text-primary-blue
  text-xs
  focus:outline-none
  placeholder:text-blue-gray
`;

const InputLgAddButton = tw.button`
  text-primary-blue
  w-4
  h-4
  text-xl
  flex
  items-center
  justify-center
`;

const InputLgCloseButton = tw(InputLgAddButton)`
  text-sm
  font-semibold
`;

export {
  Label,
  InputWrapper,
  Input,
  iconClassName,
  errorPathClassName,
  correctPathClassName,
  ErrorMessage,
  InputLgWrapper,
  InputLg,
  InputLgAddButton,
  InputLgCloseButton
};
