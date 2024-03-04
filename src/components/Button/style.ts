import tw from 'tailwind-styled-components';

const buttonBaseClassName =
  'w-48 h-14 flex items-center justify-center rounded-[20px] font-semibold transition-colors';

const buttonMdClassName = `${buttonBaseClassName} bg-primary-blue text-white hover:bg-secondary-blue hover:text-zinc-100 sm:w-full sm:h-[60px]`;

const buttonMdOutlinedClassName = `${buttonBaseClassName} bg-transparent text-primary-blue border-solid border-primary-blue border-3 hover:bg-primary-blue hover:text-zinc-100 sm:w-full sm:h-[60px]`;

const ButtonMd = tw.button`
  w-48
  h-14
  flex
  items-center
  justify-center
  font-semibold
  bg-primary-blue
  text-white
  hover:bg-secondary-blue
  hover:text-zinc-100
  rounded-[20px]
  transition-colors
  sm:w-full
  sm:h-[60px]
`;

const ButtonMdOutlined = tw.button`
  w-48
  h-14
  flex
  items-center
  justify-center
  font-semibold
  text-primary-blue
  bg-transparent
  border-solid
  border-primary-blue
  border-3
  hover:bg-primary-blue
  hover:text-zinc-100
  rounded-[20px]
  transition-colors
  sm:w-full
  sm:h-[60px]
`;

const FormBlueButton = tw.button`
  h-9
  w-11/12
  flex
  items-center
  justify-center
  font-semibold
  rounded-lg
  bg-primary-blue
  text-off-white
  hover:text-zinc-100
  hover:bg-secondary-blue
  focus:text-zinc-100
  focus:bg-secondary-blue
  disabled:bg-zinc-400
  disabled:cursor-progress
  transition-colors
  gap-3
`;

const formGrayButtonClassName = `h-9 flex items-center justify-center rounded-lg text-off-white hover:text-zinc-100 focus:text-zinc-100 transition-colors w-5/6 bg-zinc-500 hover:bg-zinc-500 focus:bg-zinc-500`;

const formNoBgButtonBaseClassName = 'text-sm transition-colors focus:outline-1';

const formNoBgBlueClassName = `${formNoBgButtonBaseClassName} text-sky-500 hover:text-sky-600 focus:outline-sky-200`;

const formNoBgGrayClassName = `${formNoBgButtonBaseClassName} text-zinc-400 hover:text-zinc-500 focus:outline-zinc-300`;

const formLoadCircle = tw.circle`
  w-4
  h-4
  rounded-full
  bg-transparent
  border-solid
  border-3
  border-off-white
  border-t-transparent
  animate-spin
`;

export {
  buttonMdClassName,
  ButtonMd,
  buttonMdOutlinedClassName,
  ButtonMdOutlined,
  FormBlueButton,
  formGrayButtonClassName,
  formNoBgBlueClassName,
  formNoBgGrayClassName,
  formLoadCircle
};
