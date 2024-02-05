import tw from 'tailwind-styled-components';

const Root = tw.form`
  w-full
  bg-off-white
  flex
  items-center
  flex-col
  rounded-[40px]
  mt-8
  mb-12
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

export { Root, Title, FieldsWrapper, Field, ButtonWrapper };
