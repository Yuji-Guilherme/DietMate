'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useWeight } from './hook';

import * as S from '../style';

function WeightCard({
  currentWeightServer,
  targetWeightServer
}: {
  currentWeightServer: number | undefined;
  targetWeightServer: number | undefined;
}) {
  const { currentWeight, targetWeight } = useWeight({
    currentWeightServer,
    targetWeightServer
  });

  return (
    <Card.MdVertical>
      <S.IconWrapperMd className="w-16 h-16 bg-primary-blue rounded-3xl">
        {currentWeight && targetWeight && (
          <Image
            src="/icons/weight.svg"
            alt="ícone de peso"
            width={32}
            height={32}
          />
        )}
        {(!currentWeight || !targetWeight) && <AddButton type="md" />}
      </S.IconWrapperMd>
      <Card.Title className="text-primary-blue text-xl">
        {targetWeight || '--'}kg
      </Card.Title>
      <Image
        src="/icons/arrow-to-up.svg"
        alt="ícone de escada com seta para cima"
        width={44}
        height={26}
        className="-rotate-6"
      />
      <Card.Subtitle className="text-xl">
        {currentWeight || '--'}kg
      </Card.Subtitle>
    </Card.MdVertical>
  );
}

export { WeightCard };
