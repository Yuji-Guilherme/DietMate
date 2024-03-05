import { Card } from '@/components/Card';
import { CaloriesCard } from './CaloriesCard';
import { ProteinCard } from './ProteinCard';
import { FatCard } from './FatCard';
import { WaterCard } from './WaterCard';
import { CarbCard } from './CarbCard';
import { WeightCard } from './WeightCard';

import { useUserStore } from '@/store/user';

import * as S from './style';

function DashboardCard() {
  const { preference } = useUserStore.getState().state.user;

  return (
    <S.CardSection>
      <CaloriesCard caloriesServer={preference?.calories} />
      <Card.MdContainer>
        <ProteinCard proteinServer={preference?.protein} />
        <FatCard fatServer={preference?.fat} />
      </Card.MdContainer>
      <Card.MdContainer>
        <WaterCard waterServer={preference?.water} />
        <CarbCard carbServer={preference?.carb} />
      </Card.MdContainer>
      <WeightCard
        currentWeightServer={preference?.currentWeight}
        targetWeightServer={preference?.targetWeight}
      />
    </S.CardSection>
  );
}

export { DashboardCard };
