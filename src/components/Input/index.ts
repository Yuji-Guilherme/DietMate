import { InputButton } from './Button';
import { ErrorIcon } from './ErrorIcon';
import { CorrectIcon } from './CorrectIcon';
import { InputLg } from './Lg';

import * as S from './style';

const Input = {
  Label: S.Label,
  Wrapper: S.InputWrapper,
  Button: InputButton,
  Component: S.Input,
  ErrorIcon: ErrorIcon,
  CorrectIcon: CorrectIcon,
  ErrorMessage: S.ErrorMessage,
  Lg: InputLg
};

export { Input };
