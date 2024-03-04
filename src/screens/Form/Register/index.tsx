import { Logo } from '@/components/Logo';
import { RegisterForm } from '@/patterns/RegisterForm';

import * as S from '@/screens/Form/style';

function Register() {
  return (
    <S.Main>
      <S.Section>
        <Logo type="lg" />
        <RegisterForm />
      </S.Section>
    </S.Main>
  );
}

export { Register };
