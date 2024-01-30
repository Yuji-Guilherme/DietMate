import { Bitter } from 'next/font/google';
import * as S from './style';

const bitter = Bitter({ subsets: ['latin'] });

function Footer() {
  return <S.Footer className={bitter.className}>Diet Mate, 2024</S.Footer>;
}

export { Footer };
