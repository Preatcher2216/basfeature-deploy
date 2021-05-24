import React, {useEffect, useState} from "react";
import './Player-Item.css'
import Classes from "../SquardList.module.css";
import {useDispatch} from "react-redux";
import {
    changeClickedMyPlayers,
    setActivePlayer,
    setIndexOfClickedPlayer,
    setMyTeamPlayers
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {createStatisticForMyTeam, setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";

type PlayerItemPropsType = {
    teamNumbers: any
    teamNames: any
    teamTitle: string
}

const PlayerItem: React.FC<PlayerItemPropsType> = ({teamNumbers,  teamNames}) => {

    const [click, setClick] = useState(false)
    const [playerID, setPlayerID] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMyTeamPlayers(playersNumb))
        dispatch(createStatisticForMyTeam(teamNumbers, teamNames))

    },[])


    const onClick = (e: any) => {
        setClick((prev) => !prev)
        setPlayerID(e.target.id)
        dispatch(setIndexOfClickedPlayer(+e.target.id))
        dispatch(changeClickedMyPlayers(+e.target.id))
    }

    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={el.isClicked ? `${Classes.MyPlayersElement} ${Classes.Clicked}` : `${Classes.MyPlayersElement}`}
                onClick={onClick} id={el.playerNumber}>{el.playerNumber}</div>
        )
    })


    return (
        <>
            {playersNumb}
        </>
    )
}

export default PlayerItem