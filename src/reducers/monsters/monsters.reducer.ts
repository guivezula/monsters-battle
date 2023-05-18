import { createReducer } from '@reduxjs/toolkit';
import { BattleResult } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchBattleData, fetchMonstersData, setComputedMonster, setSelectedMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computedMonster: Monster | null;
  battleResult: BattleResult | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computedMonster: null,
  battleResult: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
    battleResult: null,
  }));

  builder.addCase(setComputedMonster, (state, action) => ({
    ...state,
    computedMonster: action.payload,
    battleResult: null,
  }));

  builder.addCase(fetchBattleData.pending, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleData.rejected, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleData.fulfilled, (state, action) => ({
    ...state,
    battleResult: action.payload,
  }));
});
