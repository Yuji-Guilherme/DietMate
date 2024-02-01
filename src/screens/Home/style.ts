import tw from 'tailwind-styled-components';

const Main = tw.main`
  w-full
  flex
  items-center
  flex-col
`;

const FirstSection = tw.section`
  w-11/12
  pt-6
  pb-8
  px-20
  flex
  justify-between
  md-:px-8
  tablet:px-2
  sm:flex-col
  sm:px-4
  sm:pt-0
`;

const SecondSection = tw.section`
  w-11/12
  h-screen
  flex
  justify-center
  items-center
  px-20
  gap-20
  sm:flex-col-reverse
  sm:px-4
  sm:h-full
  sm:mt-12
  sm:mb-16
  sm:gap-18
`;

const TitleWrapper = tw.div`
  w-1/2
  mt-4
  sm:w-full
  sm:mt-2
`;

const Title = tw.h1`
  text-6xl
  font-bold
  text-primary-blue
  leading-tight
  md:text-4xl
  sm:text-4xl
  sm:leading-snug
`;

const TitleLastWord = tw.em`
  not-italic
  text-new-orange
`;

const Subtitle = tw.h2`
  text-lg
  text-slate-600
  max-w-lg
  mt-3
  sm:text-xl
  sm:max-w-xs
  sm:mt-7
`;

const SecondTextWrapper = tw.div`
  w-1/2
  flex
  flex-col
  items-center
  mb-20
  sm:w-full
  sm:mb-0
`;

const SecondTitle = tw.h2`
  text-5xl
  font-bold
  text-primary-blue
  max-w-xl
  leading-tight
  md:text-3xl
  sm:text-3xl
`;

const SecondSubtitle = tw.h3`
  text-lg
  text-slate-600
  mt-3
  max-w-xl
  md:text-base
`;

const ButtonWrapper = tw.div`
  flex
  mt-10
  gap-6
  sm:flex-col
  sm:mt-12
`;

const buttonBaseClassName =
  'w-48 h-14 flex items-center justify-center rounded-[20px] font-semibold transition-colors';

const primaryButtonClassName = `${buttonBaseClassName} bg-primary-blue text-white hover:bg-secondary-blue hover:text-zinc-100  sm:w-full sm:h-[60px]`;

const secondButtonClassName = `${buttonBaseClassName} bg-transparent text-primary-blue border-solid border-primary-blue border-3 hover:bg-primary-blue hover:text-zinc-100 sm:w-full sm:h-[60px]`;

const mainImageClassName =
  'rounded-[60px] md:w-full md:h-full sm:rounded-[36px]';

const MainImageWrapper = tw.div`
  md-:w-[360px]
  md-:h-[360px]
  tablet:w-80
  tablet:h-80
  sm:max-w-sm
  sm:max-h-sm
  sm:w-full
  sm:mt-12
  sm:self-center
`;

const SecondImageWrapper = tw.div`
  h-[400px]
  w-[400px]
  md:h-[300px]
  md:w-[300px]
  sm:max-w-xs
  sm:max-h-xs
  sm:w-full
  sm:h-fit
`;

const secondImageClassName = 'rounded-[56px] sm:rounded-[32px]';

export {
  Main,
  FirstSection,
  SecondSection,
  TitleWrapper,
  Title,
  TitleLastWord,
  Subtitle,
  SecondTextWrapper,
  SecondTitle,
  SecondSubtitle,
  ButtonWrapper,
  primaryButtonClassName,
  secondButtonClassName,
  mainImageClassName,
  MainImageWrapper,
  SecondImageWrapper,
  secondImageClassName
};
