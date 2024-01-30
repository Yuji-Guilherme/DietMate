import Image from 'next/image';
import Link from 'next/link';
import * as S from './style';

function Home() {
  return (
    <S.Main>
      <S.FirstSection>
        <S.TitleWrapper>
          <S.Title>
            Sua jornada para uma vida mais saudável, começa{' '}
            <S.TitleLastWord>aqui</S.TitleLastWord>
          </S.Title>
          <S.Subtitle>
            Personalize sua dieta, monitore suas refeições. Alcance seus
            objetivos.
          </S.Subtitle>
          <S.ButtonWrapper>
            <Link href="/register" className={S.PrimaryButtonClassName}>
              Cadastre-se
            </Link>
            <Link href="/login" className={S.SecondButtonClassName}>
              Entrar
            </Link>
          </S.ButtonWrapper>
        </S.TitleWrapper>
        <S.MainImageWrapper>
          <Image
            src="/home.jpeg"
            alt="foto de um prato saudável"
            width={520}
            height={520}
            className={S.MainImageClassName}
          />
        </S.MainImageWrapper>
      </S.FirstSection>
      <S.SecondSection>
        <S.SecondImageWrapper>
          <Image
            src="/home2.jpeg"
            alt="imagem de um frango assado"
            width={400}
            height={400}
            className={S.SecondImageClassName}
          />
        </S.SecondImageWrapper>
        <S.SecondTextWrapper>
          <S.SecondTitle>Mais de 400 alimentos registrados.</S.SecondTitle>
          <S.SecondSubtitle>
            Analise as calorias e macronutrientes dos alimentos, descubra mais
            sobre oque você ingere.
          </S.SecondSubtitle>
        </S.SecondTextWrapper>
      </S.SecondSection>
    </S.Main>
  );
}

export { Home };
