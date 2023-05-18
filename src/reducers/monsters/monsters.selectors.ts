import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectComputedMonster = (state: RootState) => state.monsters.computedMonster;

export const selectBattleResult = (state: RootState) => state.monsters.battleResult;
