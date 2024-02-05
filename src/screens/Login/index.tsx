import { Logo } from '@/components/Logo';
import { LoginForm } from '@/patterns/LoginForm';

import * as S from './style';

function Login() {
  return (
    <S.Main>
      <S.Section>
        <Logo type="lg" />
        <LoginForm />
      </S.Section>
    </S.Main>
  );
}

export { Login };
