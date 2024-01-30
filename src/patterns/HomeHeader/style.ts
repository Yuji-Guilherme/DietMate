import tw from 'tailwind-styled-components';

const Header = tw.header`
  px-12
  py-9
  flex
  justify-between
  sm: px-8
`;

const LogoWrapper = tw.div`
  flex
  gap-4
  items-center
`;

const LogoText = tw.p`
  font-bold
  text-lg
  text-primary-blue
`;

const Nav = tw.nav`
  flex
  items-center
  gap-3
`;

const NavLinkWrapper = tw.div`
  h-8
  flex
  items-center
  border-solid
  border-slate-600
  border-r-1
  pr-3
`;

const VisitLinkClassName = 'text-slate-600 hover:decoration-1 hover:underline';

export {
  Header,
  LogoWrapper,
  LogoText,
  Nav,
  NavLinkWrapper,
  VisitLinkClassName
};
