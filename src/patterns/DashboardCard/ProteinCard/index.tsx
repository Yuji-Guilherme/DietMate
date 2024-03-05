'use client';

import Image from 'next/image';
import { Card } from '@/components/Card';
import { AddButton } from '@/patterns/DashboardCard/AddButton';
import { useProtein } from './hook';

import * as S from '../style';

function ProteinCard({ proteinServer }: { proteinServer: number | undefined }) {
  const { protein } = useProtein({ proteinServer });

  return (
    <Card.Md>
      <S.IconWrapperMd className="bg-new-red">
        {protein && (
          <Image
            src="/icons/beef.svg"
            alt="ícone de bife"
            width={24}
            height={23}
          />
        )}
        {!protein && <AddButton type="md" />}
      </S.IconWrapperMd>
      <Card.TextWrapper>
        <Card.Title className="text-new-red">{protein || '---'}g</Card.Title>
        <Card.Subtitle>proteínas</Card.Subtitle>
      </Card.TextWrapper>
    </Card.Md>
  );
}

export { ProteinCard };
