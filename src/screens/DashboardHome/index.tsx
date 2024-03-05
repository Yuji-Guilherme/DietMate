import Link from 'next/link';
import Image from 'next/image';
import { setUser } from '@/utils/user';
import { DashboardCard } from '@/patterns/DashboardCard';

import * as S from './style';

async function DashBoardScreen() {
  await setUser();

  return (
    <S.Main>
      <S.Title>Meta diária</S.Title>
      <DashboardCard />
      <section className="mt-12 w-full flex flex-wrap gap-7">
        <section className="min-w-[553px]">
          <Link href="/dashboard/diet" className="flex items-center gap-2">
            <S.Title>Dieta</S.Title>
            <Image
              src="/icons/arrow.svg"
              alt="ícone de flecha"
              width={21}
              height={20}
              className="mt-[2px] -rotate-[130deg]"
            />
          </Link>
        </section>
        <section className="min-w-[423px]">
          <Link href="/dashboard/workout" className="flex items-center gap-2">
            <S.Title>Treino</S.Title>
            <Image
              src="/icons/arrow.svg"
              alt="ícone de flecha"
              width={21}
              height={20}
              className="mt-[2px] -rotate-[130deg]"
            />
          </Link>
        </section>
      </section>
    </S.Main>
  );
}

export { DashBoardScreen };
