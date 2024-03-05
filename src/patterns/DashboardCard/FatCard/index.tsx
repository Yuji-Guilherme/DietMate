'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useFat } from './hook';

import * as S from '../style';

function FatCard({ fatServer }: { fatServer: number | undefined }) {
  const { fat } = useFat({ fatServer });

  return (
    <Card.Md>
      <S.IconWrapperMd className="bg-dark-orange">
        {fat && (
          <Image
            src="/icons/egg.svg"
            alt="ícone de ovo frito"
            width={24}
            height={24}
            className="ml-[2px] mb-px"
          />
        )}
        {!fat && <AddButton type="md" />}
      </S.IconWrapperMd>
      <Card.TextWrapper>
        <Card.Title className="text-dark-orange">{fat || '---'}g</Card.Title>
        <Card.Subtitle>gorduras</Card.Subtitle>
      </Card.TextWrapper>
    </Card.Md>
  );
}
export { FatCard };
