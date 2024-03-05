import tw from 'tailwind-styled-components';

const CardMdContainer = tw.div`
  w-[275px]
  flex
  flex-col
  gap-9
`;

const Card = tw.div`
  bg-secondary-white
  flex
  items-center
`;

const CardMd = tw(Card)`
  w-full
  h-[120px]
  rounded-2xl
  px-8
  gap-6
`;

const CardMdVertical = tw(Card)`
  w-[120px]
  min-h-[275px]
  flex-col
  rounded-2xl
  py-7
  gap-6
`;

const CardLg = tw(Card)`
  w-60
  flex-col
  justify-center
  gap-5
  rounded-3xl
  min-h-[275px]
`;

const CardTextWrapper = tw.div`
  flex
  flex-col
`;

const CardTitle = tw.h3`
  text-xl
  font-bold
`;

const CardSubtitle = tw.h4`
  text-blue-gray
  text-sm
  font-medium
`;

export {
  CardMdContainer,
  CardMd,
  CardMdVertical,
  CardLg,
  CardTextWrapper,
  CardTitle,
  CardSubtitle
};
