import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"
import { WinnerDisplayContainer } from "../../components/winner-display/WinnerDisplay.styled"
import { BattleData } from "../../models/interfaces/battle.interface"
import { Monster } from "../../models/interfaces/monster.interface"
import { fetchBattleData, fetchMonstersData, setComputedMonster } from "../../reducers/monsters/monsters.actions"
import { selectBattleResult, selectComputedMonster, selectMonsters, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const computedMonster = useSelector(selectComputedMonster);
    const battleResult = useSelector(selectBattleResult);

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    useEffect(() => {
        handleComputedMonster();
    }, [selectedMonster]);

    const handleStartBattleClick = () => {
        if (selectedMonster && computedMonster) {
            const data: BattleData = {
                monster1Id: selectedMonster.id,
                monster2Id: computedMonster.id,
            }
            console.log(JSON.stringify(data));
            dispatch(fetchBattleData(data))
        }
        console.log(battleResult);
    }

    const handleComputedMonster = () => {
        if (selectedMonster) {
            const randomNumber = () => Math.floor(Math.random() * (monsters.length - 1) + 1);
            let randomId = `monster-${randomNumber()}`;
            while (randomId === selectedMonster?.id) {
                randomId = `monster-${randomNumber()}`;
            }
            const randomMonster: Monster | null = monsters.find((monster) => monster.id === randomId) || null;
            dispatch(setComputedMonster(randomMonster));
        } else {
            dispatch(setComputedMonster(null));
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {battleResult && <WinnerDisplay text={battleResult?.winner?.name} />}

            <BattleSection>
                <MonsterBattleCard title={selectedMonster?.name || "Player"} monster={selectedMonster}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title="Computer" monster={computedMonster}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }