import tw from 'tailwind-styled-components';

const LogoWrapper = tw.div`
  flex
  items-center
`;

const LogoText = tw.p`
  font-bold
text-primary-blue
`;

const LogoSmWrapper = tw(LogoWrapper)`
  gap-4
`;

const LogoSmText = tw(LogoText)`
  text-lg
`;

const LogoLgWrapper = tw(LogoWrapper)`
  gap-5
`;

const LogoLgText = tw(LogoText)`
  text-4xl
`;

const LogoAsideWrapper = tw(LogoWrapper)`
  gap-2
`;

const LogoAsideText = tw(LogoText)`
  text-off-white
  text-base
  max-w-10
`;

export {
  LogoSmWrapper,
  LogoSmText,
  LogoLgWrapper,
  LogoLgText,
  LogoAsideWrapper,
  LogoAsideText
};
