import { useEffect } from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterCardContent,
  BattleMonsterName,
  BattleMonsterSkill,
  BattleMonsterSkillContainer,
  BattleMonsterTitle,
  Image,
  ProgressBar,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized>
      {!monster ?
        <BattleMonsterTitle>{title!}</BattleMonsterTitle> : 
        <BattleMonsterCardContent centralized>
            <Image src={monster.imageUrl}/>
            <BattleMonsterName>{monster?.name}</BattleMonsterName>
            <BattleMonsterSkillContainer>
                <BattleMonsterSkill>HP</BattleMonsterSkill>
                <ProgressBar value={monster?.hp} variant={'determinate'} valueBuffer={100} />
                <BattleMonsterSkill>Attack</BattleMonsterSkill>
                <ProgressBar value={monster?.attack} variant={'determinate'} valueBuffer={100} />
                <BattleMonsterSkill>Defense</BattleMonsterSkill>
                <ProgressBar value={monster?.defense} variant={'determinate'} valueBuffer={100} />
                <BattleMonsterSkill>Speed</BattleMonsterSkill>
                <ProgressBar value={monster?.speed} variant={'determinate'} valueBuffer={100} />
            </BattleMonsterSkillContainer>
        </BattleMonsterCardContent>}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
