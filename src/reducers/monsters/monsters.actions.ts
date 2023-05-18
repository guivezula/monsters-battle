import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BattleData, BattleResult } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputedMonster = createAction<Monster | null>(
  'monster/setComputedMonster',
);

export const fetchBattleData = createAsyncThunk<BattleResult | null, BattleData>(
  'monsters/fetchBattleData',
  (data) => MonsterService.postBattle(data),
)