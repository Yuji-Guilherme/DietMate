import { Bitter } from 'next/font/google';
import type { HTMLAttributes } from 'react';

import * as S from './style';

const bitter = Bitter({ subsets: ['latin'] });

type FooterProps = HTMLAttributes<HTMLElement>;

function Footer({ ...props }: FooterProps) {
  return (
    <S.Footer {...props} className={bitter.className}>
      Diet Mate, 2024
    </S.Footer>
  );
}

export { Footer };
