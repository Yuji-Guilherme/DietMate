import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
  flex
  flex-col
  gap-3
  top-10
  right-10
  absolute
`;

const toggleButton = tw.button`
  flex
  items-center
  justify-center
  gap-3
`;

const Text = tw.p`
  text-primary-blue
`;

export { Wrapper, toggleButton, Text };
