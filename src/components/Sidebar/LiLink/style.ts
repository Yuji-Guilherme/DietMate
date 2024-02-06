import tw from 'tailwind-styled-components';

type TwLiProps = {
  isActive: boolean;
};

const Li = tw.li<TwLiProps>`
  text-off-white
  text-sm
  w-full
  h-11
  hover:font-medium
  transition-all
  ${(p) => p.isActive && 'bg-secondary-blue font-medium border-solid border-r-8 border-new-orange'}
`;

const linkClassName = 'w-full h-full flex items-center justify-center gap-5';

export { Li, linkClassName };
