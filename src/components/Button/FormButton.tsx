import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './style';

type FormButtonType = 'blue';
type LinkedFormButtonType = 'gray' | 'noBgBlue' | 'noBgGray';

type TailwindButton = TailwindComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

const FormButton: Record<FormButtonType, TailwindButton> = {
  blue: S.FormBlueButton
};

const FormLoadCircle = S.formLoadCircle;

const formButtonClassName: Record<LinkedFormButtonType, string> = {
  gray: S.formGrayButtonClassName,
  noBgGray: S.formNoBgGrayClassName,
  noBgBlue: S.formNoBgBlueClassName
};

export { FormButton, formButtonClassName, FormLoadCircle };
