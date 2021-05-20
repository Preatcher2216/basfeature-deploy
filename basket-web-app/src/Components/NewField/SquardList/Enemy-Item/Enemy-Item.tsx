import React, {useEffect, useRef, useState} from "react";
import './../Player-Item/Player-Item.css'
import Classes from "../SquardList.module.css";
import {useDispatch} from "react-redux";
import {
    setEnemyTeamPlayers,
    setIndexOfClickedEnemyPlayer
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {createStatisticForEnemyTeam, setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";

type PlayerItemPropsType = {
    teamNumbers: any
    isMyTeam: boolean
    isClicked: boolean
    teamNames: any
}

const EnemyItem: React.FC<PlayerItemPropsType> = ({teamNumbers, isMyTeam, isClicked,teamNames}) => {

    const [click, setClick] = useState(isClicked)
    const [playerID, setPlayerID] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setEnemyTeamPlayers(playersNumb))
        dispatch(createStatisticForEnemyTeam(teamNumbers, teamNames))
    },[])

    const onClick = (e: any) => {
        setClick((prev) => !prev)
        setPlayerID(e.target.id)
        dispatch(setChosenPlayer(e.target.id))
        dispatch(setIndexOfClickedEnemyPlayer(+e.target.id))
         
    }

    console.log('click')
    console.log(click)

    let count = 0
    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={`${Classes.EnemyPlayersElement}`}
                onClick={onClick} id={el}>{el}</div>
        )
    })

    return (
        <>
            {playersNumb}
        </>
    )
}

export default EnemyItem