import tw from 'tailwind-styled-components';

const Ul = tw.ul`
  w-3/4
  flex
  flex-wrap
  justify-center
  items-center
  gap-8
`;

const CardRoot = tw.div`
  w-60
  bg-cream-white
  rounded-2xl
  flex
  flex-col
  p-5
  gap-4
`;

const CardTitle = tw.p`
  text-primary-blue
  font-medium
  w-full
`;

const CardInfoWrapper = tw.div`
  flex
  gap-2
`;

const CloseButton = tw.button`
  self-start
  text-sm
  text-primary-blue
`;

const CardSubtitle = tw.p`
  text-sm
  text-blue-gray
`;

const CardInfo = tw.p`
  text-sm
  text-primary-blue
`;

export {
  Ul,
  CardRoot,
  CardTitle,
  CardInfoWrapper,
  CloseButton,
  CardSubtitle,
  CardInfo
};
