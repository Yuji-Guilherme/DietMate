'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useWater } from './hook';

import * as S from '../style';

function WaterCard({ waterServer }: { waterServer: number | undefined }) {
  const { water, plural } = useWater({ waterServer });

  return (
    <Card.Md>
      <S.IconWrapperMd className="bg-water-blue">
        {water && (
          <Image
            src="/icons/cup.svg"
            alt="ícone de copo"
            width={16}
            height={22}
          />
        )}
        {!water && <AddButton type="md" />}
      </S.IconWrapperMd>
      <Card.TextWrapper>
        <Card.Title className="text-water-blue">
          {water || '--'} Litro{plural()}
        </Card.Title>
        <Card.Subtitle>p/ dia</Card.Subtitle>
      </Card.TextWrapper>
    </Card.Md>
  );
}
export { WaterCard };
