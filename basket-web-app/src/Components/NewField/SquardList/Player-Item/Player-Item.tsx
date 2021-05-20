import React, {useEffect, useState} from "react";
import './Player-Item.css'
import Classes from "../SquardList.module.css";
import {useDispatch} from "react-redux";
import {
    setActivePlayer,
    setIndexOfClickedPlayer,
    setMyTeamPlayers
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {createStatisticForMyTeam, setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";

type PlayerItemPropsType = {
    teamNumbers: any
    teamNames: any
    isMyTeam: boolean
    isClicked: boolean
}

const PlayerItem: React.FC<PlayerItemPropsType> = ({teamNumbers, isMyTeam, isClicked,teamNames}) => {

    const [click, setClick] = useState(isClicked)
    const [playerID, setPlayerID] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMyTeamPlayers(playersNumb))
        dispatch(createStatisticForMyTeam(teamNumbers, teamNames))
    },[])

    const style = 'isClicked'

    const onClick = (e: any) => {
         
        setClick((prev) => !prev)
        setPlayerID(e.target.id)
        dispatch(setChosenPlayer(e.target.id))
        dispatch(setIndexOfClickedPlayer(+e.target.id))
    }

    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={`${Classes.MyPlayersElement}`}
                onClick={onClick} id={el}>{el}</div>
        )
    })


    return (
        <>
            {playersNumb}
        </>
    )
}

export default PlayerItem