import tw from 'tailwind-styled-components';

const Form = tw.form`
  w-full
  bg-off-white
  flex
  items-center
  flex-col
  rounded-[40px]
  mt-8
`;

const Title = tw.p`
  text-lg
  text-primary-blue
  font-semibold
  mt-8
`;

const FieldsWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
  mt-8
  gap-5
`;

const Field = tw.div`
  flex
  flex-col
  gap-3
  w-full
  px-7
`;

const ButtonWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
  my-10
  px-8
  gap-7
`;

const RegisterButton = tw.button`
  w-11/12
  h-9
  bg-primary-blue
  text-off-white
  font-semibold
  rounded-lg
  hover:bg-secondary-blue
  hover:text-zinc-100
  transition-colors
`;

const loginLinkClassName =
  'text-sm text-sky-500 hover:text-sky-600 transition-colors';

export {
  Form,
  Title,
  FieldsWrapper,
  Field,
  ButtonWrapper,
  RegisterButton,
  loginLinkClassName
};
