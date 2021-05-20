import React, {useEffect, useRef, useState} from 'react';
import Classes from './History.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    clearActiveEnemyPlayersForGame,
    clearActiveMyPlayersForGame,
    gameIsStart
} from "../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {
    getApiKey, getDeleteAction, getDeletePlayerNumber, getDeleteSector, getEmail,
    getEnemyPlayerTeam,
    getHistory,
    getMyPlayerTeam, getSelectEnemyTeamTitle, getSelectMyTeamTitle,
    getThrows
} from "../../NewMainPage/Main-Preson-Selectors";
import HistoryElement, {HistoryElementPropsType} from "./History-Element/History-Element";
import {
    clearFieldPiece,
    clearHistory,
    clearThrows,
} from "../../../Redux/Redusers/Game-Window/game-statistic";
import './History.css'
import {addGameThunk} from "../../../Redux/Redusers/Game-Window/backend-statistic";

type HistoryPropsType = {}

const History: React.FC<HistoryPropsType> = ({}) => {

    const [tableUrl, setTableUrl] = useState('')
    const [isStart, setIsStart] = useState(false)
    const [crutch, setCrutch] = useState(0)
    const gameHistory = useSelector(getHistory)
    const players1 = useSelector(getMyPlayerTeam)
    const players2 = useSelector(getEnemyPlayerTeam)
    const throws = useSelector(getThrows)
    const apiKey = useSelector(getApiKey)
    const deleteAction = useSelector(getDeleteAction)
    const deletePlayerNumber = useSelector(getDeletePlayerNumber)
    const deleteSector = useSelector(getDeleteSector)
    const myTeamTitle = useSelector(getSelectMyTeamTitle)
    const enemyTeamTitle = useSelector(getSelectEnemyTeamTitle)
    const personEmail = useSelector(getEmail)

    const dispatch = useDispatch()

    const historyRef = useRef<any | null>(null)

    const finishMatch = (e: any) => {
        dispatch(gameIsStart(isStart))
         
        dispatch(addGameThunk(myTeamTitle, enemyTeamTitle, JSON.stringify(players1), JSON.stringify(throws), personEmail, apiKey, ))
        dispatch(clearHistory())
        dispatch(clearActiveMyPlayersForGame())
        dispatch(clearActiveEnemyPlayersForGame())
        dispatch(clearFieldPiece())
        dispatch(clearThrows())
    }


    const history = gameHistory.map((el: any) => {
        return (
            <HistoryElement sector={el.sector} playerNumber={el.playerNumber} action={el.action} playerName={el.name}
                            team={el.team} length={gameHistory.length} ref={historyRef}/>
        )
    })

    console.log('gameHistory')
    console.log(gameHistory)


    console.log('tableUrl')
    console.log(tableUrl)

    useEffect(() => {
        setCrutch((prev) => prev + 1)
        console.log(`History count ${crutch}`)
    }, [gameHistory])

    useEffect(() => {
        let buffArr = history
        for (let i = 0; i < history.length; i++) {
            if(history[i].sector === +deleteSector && history[i].playerNumber === +deletePlayerNumber && history[i].action === deleteAction)
                buffArr.splice(i,1)
        }
        console.log('history')
        console.log(history)
    }, [gameHistory])

    if (history.length != gameHistory.length)
        console.log('Error')


    return (
        <div className={Classes.History}>
            <div className={Classes.HistoryBlock}>
                <div className={Classes.HistoryText}>
                    <span className={Classes.HistoryLeft}>История матча</span>
                    <span
                        className={Classes.HistoryRight}>Чтобы поменять данные, нажмите на них и выберите нужные</span>
                </div>
                <div className={Classes.HistoryBox}>
                    {history}
                </div>
            </div>
            <button className={Classes.HistoryBtn} onClick={finishMatch}>Закончить матч</button>
        </div>
    );
}

export default History;