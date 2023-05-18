import { Monster } from "./monster.interface";

export interface BattleData {
    monster1Id: string;
    monster2Id: string;
};

export interface BattleResult {
    winner: Monster;
    tie: boolean;
};