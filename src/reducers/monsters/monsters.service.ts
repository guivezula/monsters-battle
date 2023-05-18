import { API_URL } from '../../constants/env';
import {
  BattleData,
  BattleResult,
} from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (data: BattleData): Promise<BattleResult> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  postBattle,
};
