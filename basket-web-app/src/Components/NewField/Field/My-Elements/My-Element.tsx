import React, {useState} from "react";
import Classes from "../../SquardList/SquardList.module.css";
import {setChosenPlayer} from "../../../../Redux/Redusers/Game-Window/game-statistic";
import {
    changeClickedEnemyPlayers, changeClickedMyPlayers,
    setIndexOfClickedEnemyPlayer,
    myPlayerClickInGame
} from "../../../../Redux/Redusers/Game-Window/choose-team-reducer";
import {useDispatch} from "react-redux";

type MyElementType = {
    teamNumbers: any
}

const MyElements: React.FC<MyElementType> = ({teamNumbers}) => {

    const [click, setClick] = useState(false)

    const dispatch = useDispatch()

    const onClick = (e: any) => {
        debugger
        // setClick((prev) => !prev)
        console.log(e.target.id)
        dispatch(setChosenPlayer(e.target.id))
        dispatch(myPlayerClickInGame(+e.target.id))
        setClick((prev) => !prev)
    }

    const playersNumb = teamNumbers.map((el: any) => {
        return (
            <div
                className={el.isClicked ? `${Classes.MyPlayersElement} ${Classes.Clicked}` : `${Classes.MyPlayersElement}`}
                onClick={onClick} id={el.playerNumber}>{el.playerNumber}</div>
        )
    })

    return(
        <>
            {playersNumb}
        </>
    )
}

export default MyElements