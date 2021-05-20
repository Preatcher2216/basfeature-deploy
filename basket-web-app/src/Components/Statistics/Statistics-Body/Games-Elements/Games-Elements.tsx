import React, {useState} from "react";
import Classes from './Games-Elements.module.css'
import {useDispatch, useSelector} from "react-redux";
import {findGame, getStatisticsOfOneGameThunk} from "../../../../Redux/Redusers/Game-Window/backend-statistic";
import {getApiKey, getChosenTeamID, getOneGame} from "../../../NewMainPage/Main-Preson-Selectors";
import PopupPlayersChoose from "../../../Modal/Players-Choose/Popup-Players-Choose";

type GamesElementsType = {
    team1: string
    team2: string
    date: string
}

const GamesElements: React.FC<GamesElementsType> = ({team1, team2, date}) => {

    const [active, setActive] = useState(false)
    const chosenGameID = useSelector(getChosenTeamID)
    const apiKey = useSelector(getApiKey)
    const selectGameInfo = useSelector(getOneGame)
    const dispatch = useDispatch()

    const showTableUrl = ((e: any) => {
         
        setActive(true)
        dispatch(findGame(e.currentTarget.children[0].innerText, e.currentTarget.children[1].innerText, e.currentTarget.children[2].innerText))
        dispatch(getStatisticsOfOneGameThunk(apiKey, +chosenGameID))
    })

    const closeWindow = () => {
        setActive(false)
    }
    const openNewWindow = () => {
        window.open(selectGameInfo)
    }
    return (
        <div className={Classes.MainWrapper} onClick={showTableUrl}>
            <div className={Classes.Text}>{team1}</div>
            <div className={Classes.Text}>{team2}</div>
            <div className={Classes.Text}>{date}</div>


            <PopupPlayersChoose active={active} setActive={setActive}>
                <div className={Classes.MainWrapperPopup}>
                    <div className={Classes.TextBlock} onClick={openNewWindow}>{selectGameInfo}</div>
                    <button className={Classes.CloseBtn} onClick={closeWindow}>Закрыть</button>
                </div>

            </PopupPlayersChoose>
        </div>
    )
}

export default GamesElements