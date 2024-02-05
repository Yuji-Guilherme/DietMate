import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './style';

type ButtonType = 'md' | 'mdOutlined';

type TailwindButton = TailwindComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

const Button: Record<ButtonType, TailwindButton> = {
  md: S.ButtonMd,
  mdOutlined: S.ButtonMdOutlined
};

const buttonClassName: Record<ButtonType, string> = {
  md: S.buttonMdClassName,
  mdOutlined: S.buttonMdOutlinedClassName
};

export { Button, buttonClassName };
