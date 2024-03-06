import tw from 'tailwind-styled-components';

const Ul = tw.ul`
  w-full
  flex
  flex-col
  items-center
  gap-8
`;

const CardRoot = tw.li`
  w-full
  max-w-xl
  h-32
  bg-cream-white
  px-6
  py-4
  grid
  grid-cols-5
  grid-rows-card
  rounded-[30px]
`;

const CardTitle = tw.p`
  text-primary-blue
  col-span-4
  font-medium
  overflow-hidden
  whitespace-nowrap
`;

const CardCloseButton = tw.button`
  text-primary-blue
  w-4
  h-4
  text-sm
  flex
  items-center
  justify-center
  justify-self-end
`;

const CardInfoWrapper = tw.div`
  w-full
  row-span-2
  flex
  flex-col
  items-center
  justify-center
  gap-2
`;

const CardInfoTitleWrapper = tw.div`
  flex
  items-center
  gap-2
`;

const CardInfoTitle = tw.p`
  text-primary-blue
  text-sm
  font-medium
`;

const CardEditButton = tw.button`
  outline-none
  flex
  items-center
  justify-center
`;

const CardGramsInput = tw.input`
  w-fit
  max-w-14
  text-primary-blue
  text-sm
  font-medium
  disabled:bg-transparent
`;

const CardInfoLabel = tw.p`
  text-sm
  text-blue-gray
`;

const CardCircle = tw.circle`
  w-[5px]
  h-[5px]
  rounded-full
`;

export {
  Ul,
  CardRoot,
  CardTitle,
  CardCloseButton,
  CardInfoWrapper,
  CardInfoTitleWrapper,
  CardEditButton,
  CardGramsInput,
  CardInfoTitle,
  CardInfoLabel,
  CardCircle
};
