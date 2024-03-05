import tw from 'tailwind-styled-components';

const CardSection = tw.section`
  w-fit
  mx-auto
  flex
  flex-wrap
  gap-7
  mt-9
`;

const IconWrapper = tw.div`
  flex
  items-center
  justify-center
`;

const IconWrapperMd = tw(IconWrapper)`
  w-12
  h-12
  rounded-[20px]
`;

const IconWrapperLg = tw(IconWrapper)`
  w-24
  h-24
  rounded-[40px]
`;

const addLinkClassNameLg =
  'w-full h-full text-4xl text-secondary-white flex items-center justify-center rounded-[40px]';

const addLinkClassNameMd =
  'w-full h-full text-2xl pb-1 text-secondary-white flex items-center justify-center rounded-[20px]';

export {
  CardSection,
  IconWrapperMd,
  IconWrapperLg,
  addLinkClassNameLg,
  addLinkClassNameMd
};
