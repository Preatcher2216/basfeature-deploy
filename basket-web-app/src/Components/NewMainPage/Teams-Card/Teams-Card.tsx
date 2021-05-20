import React from 'react'
import './Teams-Card.css'
import {useDispatch} from "react-redux";
import {setTeamCardChoose} from "../../../Redux/Redusers/Game-Window/choose-team-reducer";

type PropsType = {
    teamTitle: string
    isMyTeam: boolean
    setlistPlayers: any
    teamPlayers: Array<any>
    teamNumbers: Array<any>
}

const TeamsCard: React.FC<PropsType> = ({teamTitle, teamPlayers,isMyTeam,teamNumbers,setlistPlayers}) => {

    const dispatch = useDispatch()

    const playersElements = teamPlayers.map((elem: any) => {
       return(
           <span className="TeamsCardPlayerName">{elem}</span>
       )
    })

    const numbersElements = teamNumbers.map((elem: any) => {
        return(
            <span className='TeamsCardPlayerNumber'>{elem}</span>
        )
    })

    const showAllPlayersOnClick = (e: any) => {
         
        setlistPlayers(true)
        dispatch(setTeamCardChoose(e.target.parentElement.parentElement.children[0].innerHTML))
    }
    return(
        <>
            <div className={isMyTeam ? 'TeamsCard' : 'TeamsCard EnemyTeamCard' }>
                <div className="TeamsCardTitle">{teamTitle}</div>
                <div className="TeamsCardContent">
                    <div className="TeamsCardPlayersNames">
                        {playersElements}
                    </div>
                    <div className="TeamsCardPlayersNumbers">
                        {numbersElements}
                    </div>
                </div>
                <div className="TeamsCardButtonContainer">
                    <button className="TeamsCardButton" onClick={showAllPlayersOnClick}>Подробнее</button>
                </div>
            </div>
        </>
    )
}

export default TeamsCard