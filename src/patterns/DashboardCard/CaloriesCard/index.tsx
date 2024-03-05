'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useCalories } from './hook';

import * as S from '../style';

function CaloriesCard({
  caloriesServer
}: {
  caloriesServer: number | undefined;
}) {
  const { calories } = useCalories({ caloriesServer });

  return (
    <Card.Lg>
      <S.IconWrapperLg className="bg-primary-blue">
        {calories && (
          <Image
            src="/icons/fire.svg"
            alt="ícone de fogo"
            width={28}
            height={39}
            className="mt-1"
          />
        )}
        {!calories && <AddButton type="lg" />}
      </S.IconWrapperLg>
      <Card.TextWrapper className="items-center gap-2">
        <Card.Title className="text-2xl text-secondary-blue">
          {calories || '---'} <abbr className="text-lg">kcal</abbr>
        </Card.Title>
        <Card.Subtitle className="text-base">p/ dia</Card.Subtitle>
      </Card.TextWrapper>
    </Card.Lg>
  );
}

export { CaloriesCard };
