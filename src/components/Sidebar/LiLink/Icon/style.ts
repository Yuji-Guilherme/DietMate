import type { CSSProperties } from 'react';

const svgIconClassName = 'w-4 h-4';

const pathIconClassName = 'transition-colors';

const circleIconClassName = 'transition-colors';

const pathStyleFn = (bool: boolean) => {
  return {
    stroke: `${bool ? '#FE9400' : '#F9F8D0'}`
  } as CSSProperties;
};

const circleStyleFn = (bool: boolean) => {
  return {
    fill: `${bool ? '#FE9400' : '#F9F8D0'}`
  } as CSSProperties;
};

export {
  svgIconClassName,
  pathIconClassName,
  circleIconClassName,
  pathStyleFn,
  circleStyleFn
};
