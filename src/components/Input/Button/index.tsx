import { MouseEvent } from 'react';
import { UserIcon, EyeIcon } from '../Icon';

import * as S from './style';

type InputButtonProps = {
  type: 'user' | 'eye';
  onClick?: (e: MouseEvent) => void;
};

function InputButton({ type, onClick }: InputButtonProps) {
  const components = {
    user: (
      <div className={S.iconWrapperClassName}>
        <UserIcon
          svgClassName={S.svgIconClassName}
          pathClassName={S.pathIconClassName}
        />
      </div>
    ),
    eye: (
      <button className={S.iconWrapperClassName} onClick={onClick}>
        <EyeIcon
          svgClassName={S.svgIconClassName}
          pathClassName={S.pathIconClassName}
        />
      </button>
    )
  };

  return components[type] || null;
}

export { InputButton };
