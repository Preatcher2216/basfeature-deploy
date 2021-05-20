import Classes from "../History.module.css";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {removeHistoryElement} from "../../../../Redux/Redusers/Game-Window/game-statistic";
import './../History.css'

export type HistoryElementPropsType = {
    sector: number
    playerNumber: number
    action: boolean
    playerName: string
    team: string
    length: number
    ref: any
}

const HistoryElement: React.FC<HistoryElementPropsType> = ({
                                                               sector,
                                                               action,
                                                               playerName,
                                                               team,
                                                               playerNumber,
                                                               length,
                                                               ref
                                                           }) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [crutch, setCrutch] = useState(0)


    const cancelFunc = (e: any) => {
         
        let action = e.target.parentElement.children[2].innerText === 'Успешное' ? true : false
        dispatch(removeHistoryElement(+(e.target.parentElement.children[0].lastChild.data),
            action,
            +e.target.parentElement.children[3].lastChild.data))
        // e.currentTarget.parentElement.className = 'History_HistoryBoxWrapper__1k25w Disable'
    }

    useEffect(() => {
        setCrutch(1)
    }, [length])

    return (
        <div className={Classes.HistoryBoxWrapper} ref={ref}>
            {/*<span className={Classes.HistoryBoxText}>{playerNumber}</span>*/}
            <span className={Classes.HistoryBoxText}>Игрок команды с номером {playerNumber}</span>
            <span className={Classes.HistoryBoxText}>совершил</span>
            <span
                className={`${Classes.HistoryBoxText} ${Classes.HistorySuccess}`}>{action ? 'Успешное' : 'Неудачное'}</span>
            <span className={Classes.HistoryBoxText}>действие в секторе {sector}</span>
            <span className={`${Classes.HistoryBoxText} ${Classes.HistoryCancel}`} onClick={cancelFunc}>Отменить</span>
        </div>
    )
}

export default HistoryElement