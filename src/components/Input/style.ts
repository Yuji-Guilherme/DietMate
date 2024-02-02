import tw from 'tailwind-styled-components';

type StyledInputProps = { hasError: boolean; isValid: boolean };

const Label = tw.label`
  w-fit
  text-slate-600
  font-medium
  cursor-pointer
`;

const InputWrapper = tw.div<StyledInputProps>`
  bg-amber-50
  w-full
  h-9
  flex
  items-center
  px-2
  rounded-lg
  focus-within:outline
  focus-within:outline-2
  focus-within:outline-slate-600
  ${(p) => p.hasError && 'outline outline-red-500 outline-1'}
  ${(p) => p.isValid && 'outline outline-emerald-500 outline-1'}
  group
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

export {
  Label,
  InputWrapper,
  Input,
  iconClassName,
  errorPathClassName,
  correctPathClassName,
  ErrorMessage
};
