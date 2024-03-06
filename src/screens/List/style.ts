import tw from 'tailwind-styled-components';

const Main = tw.main`
  w-5/6
  p-12
  ml-52
`;

const Section = tw.section`
  mx-auto
  flex
  flex-col
  items-center
  gap-10
  mt-20
`;

const Title = tw.h2`
  text-3xl
  font-semibold
  text-primary-blue
`;

export { Main, Section, Title };
