import React, {useEffect, useRef, useState} from "react";
import './../Player-Item/Player-Item.css'
import Classes from "../SquardList.module.css";
import {useDispatch} from "react-redux";
import {
    changeClickedEnemyPlayers,
    setEnemyTeamPlayers,
    setIndexOfClickedEnemyPlayer
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {createStatisticForEnemyTeam, setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";

type PlayerItemPropsType = {
    teamNumbers: any
    isMyTeam: boolean
    teamNames: any
    teamTitle: string
}

const EnemyItem: React.FC<PlayerItemPropsType> = ({teamNumbers, isMyTeam, teamNames}) => {

    const [click, setClick] = useState(false)
    const [playerID, setPlayerID] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setEnemyTeamPlayers(playersNumb))
        dispatch(createStatisticForEnemyTeam(teamNumbers, teamNames))
    },[])

    const onClick = (e: any) => {
        setClick((prev) => !prev)
        setPlayerID(e.target.id)
        console.log('e.target.id')
        console.log(e.target.id)
        dispatch(setIndexOfClickedEnemyPlayer(+e.target.id))
        dispatch(changeClickedEnemyPlayers(+e.target.id))
    }


    let count = 0
    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={el.isClicked ? `${Classes.EnemyPlayersElement} ${Classes.Clicked}` : `${Classes.EnemyPlayersElement} `}
                onClick={onClick} id={el.playerNumber}>{el.playerNumber}</div>
        )
    })

    return (
        <>
            {playersNumb}
        </>
    )
}

export default EnemyItem