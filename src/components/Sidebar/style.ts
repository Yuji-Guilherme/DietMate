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

const UserText = tw.p`
  overflow-hidden
  text-ellipsis
  w-3/4
`;

const ExitButtonWrapper = tw.div`
  w-full
  mt-auto
  flex
  items-center
  pl-10
  pr-6
`;

const ExitButton = tw.button`
  flex
  items-center
  gap-2
  text-off-white
  text-sm
`;

export { Aside, Nav, Ul, UserText, ExitButtonWrapper, ExitButton };
