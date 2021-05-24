import React, {useState} from "react";
import Classes from "../../SquardList/SquardList.module.css";
import {setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";
import {
    changeClickedEnemyPlayers, changeClickedMyPlayers, enemyPlayerClickInGame,
    setIndexOfClickedEnemyPlayer
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {useDispatch} from "react-redux";

type MyElementType = {
    teamNumbers: any
}

const EnemyElements: React.FC<MyElementType> = ({teamNumbers}) => {

    const [click, setClick] = useState(false)
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const onClick = (e: any) => {
        debugger
        // setClick((prev) => !prev)
        dispatch(setChosenPlayer(e.target.id))
        dispatch(enemyPlayerClickInGame(+e.target.id))
        setCount((prev) => prev+1)
    }

    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={el.isClicked ? `${Classes.EnemyPlayersElement} ${Classes.Clicked}` : `${Classes.EnemyPlayersElement} `}
                onClick={onClick} id={el.playerNumber}>{el.playerNumber}</div>
        )
    })

    return(
        <>
            {playersNumb}
        </>
    )
}

export default EnemyElements