'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useCarb } from './hook';

import * as S from '../style';

function CarbCard({ carbServer }: { carbServer: number | undefined }) {
  const { carb } = useCarb({ carbServer });

  return (
    <Card.Md>
      <S.IconWrapperMd className="bg-dark-yellow">
        {carb && (
          <Image
            src="/icons/cereal.svg"
            alt="ícone de cereal"
            width={24}
            height={23}
          />
        )}
        {!carb && <AddButton type="md" />}
      </S.IconWrapperMd>
      <Card.TextWrapper>
        <Card.Title className="text-dark-yellow">{carb || '---'}g</Card.Title>
        <Card.Subtitle>carboidratos</Card.Subtitle>
      </Card.TextWrapper>
    </Card.Md>
  );
}

export { CarbCard };
