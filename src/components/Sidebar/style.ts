import tw from 'tailwind-styled-components';

const Aside = tw.aside`
  w-52
  h-full
  bg-primary-blue
  py-10
  flex
  flex-col
  items-center
  fixed
  top-0
  left-0
  gap-24
`;

const Nav = tw.nav`
  w-full
`;

const Ul = tw.ul`
  h-full
  w-full
  flex
  flex-col
  items-center
  gap-1
`;

export { Aside, Nav, Ul };
