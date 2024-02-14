import { HTMLInputTypeAttribute, MouseEvent } from 'react';
import { UserIcon, EyeIcon, EyeLinedIcon } from './Icon';

import * as S from './style';

type InputButtonType = 'user' | 'eye';

type InputButtonProps = {
  type: InputButtonType;
  inputType: HTMLInputTypeAttribute;
  onClick?: (e: MouseEvent) => void;
};

function InputButton({ type, inputType, onClick }: InputButtonProps) {
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
      <>
        {inputType === 'password' && (
          <button
            tabIndex={-1}
            className={S.iconWrapperClassName}
            onClick={onClick}
          >
            <EyeIcon
              svgClassName={S.svgIconClassName}
              pathClassName={S.pathIconClassName}
            />
          </button>
        )}
        {inputType === 'text' && (
          <button
            tabIndex={-1}
            className={S.iconWrapperClassName}
            onClick={onClick}
          >
            <EyeLinedIcon
              svgClassName={S.svgIconClassName}
              pathClassName={S.pathIconClassName}
            />
          </button>
        )}
      </>
    )
  };

  return components[type] || null;
}

export { InputButton };
export type { InputButtonType };
