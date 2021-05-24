import React, {useCallback, useEffect, useRef, useState} from 'react'
import './Full-List-Players.css'
import {useDispatch, useSelector} from "react-redux";
import {getChosenTeamCard} from "../Main-Preson-Selectors";
import { removeTeamCard } from '../../../Redux/Redusers/Game-Window/add-team-form-reducer';

type FullListPlayersPropsType = {
    setlistPlayers: any
    listPlayers: boolean
    addedTeams: any
}

const FullListPlayers: React.FC<FullListPlayersPropsType> = ({setlistPlayers, listPlayers, addedTeams, ...props}): any => {

    const modalRef = useRef<HTMLDivElement | null>(null)
    const selectTeamCard = useSelector(getChosenTeamCard)
    const dispatch = useDispatch()
    let selectTeam: any
    let players: any
    let numbers: any

    try {
         selectTeam = addedTeams.filter((el: any) => {
            return el.teamTitle === selectTeamCard
        })
         
         players = selectTeam[0].teamPlayers.map((elem: any) => {
              
            return(
                <span className="players">{elem}</span>
            )
        })

         numbers = selectTeam[0].teamNumbers.map((elem: any) => {
            return(
                <span className='numbers'>{elem.playerNumber}</span>
            )
        })
    }
    catch (err) {
        console.log(err)
    }

    console.log(selectTeam)
    console.log(selectTeam.teamPlayers)
    console.log(numbers)


    const deleteCard = (e: any) => {
        dispatch(removeTeamCard(selectTeamCard))
        setlistPlayers(false)
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && listPlayers) {
            setlistPlayers(false)
        }
    }, [setlistPlayers, listPlayers])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    })

    const closeWindow = useCallback(() => {
        setlistPlayers(false);
    },[])

    return (listPlayers) ? (
        <div className='listPlayers' ref={modalRef} onClick={closeWindow}>
            <div className={selectTeam[0].isMyTeam ? "listPlayers-Inner" : "listPlayers-Inner enemies" } onClick={e => e.stopPropagation()}>
                {/*{props.children}*/}
                <div className='selectTeamName'>{selectTeamCard}</div>
                <div className='playersWrapper'>
                    <div className='playersMiddleware'>
                        <div className='namesWrapper'>{players}</div>
                        <div className='numbersWrapper'>{numbers}</div>
                    </div>
                    <div className='buttons'>
                        <button className='close-btn' onClick={closeWindow}>Закрыть</button>
                        <button className='close-btn' onClick={deleteCard}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default FullListPlayers