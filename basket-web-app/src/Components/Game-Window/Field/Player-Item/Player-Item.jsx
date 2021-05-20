import React, {useCallback} from 'react';
import Classes from './Player-Item.module.css'
import {NavLink} from "react-router-dom";

const PlayerSubItem = (props) => {
    /* Путь по которому будет переход при нажатии на элемент поля*/
    let path = props.rend + '/' + props.number;
    /* Функция для открытия блока с выборами передач и скрытием окна с активными игроками */
    let showPassWindow = useCallback((e) => {
        //alert("Hello")
        debugger
        let playerInfo = e.currentTarget.firstChild.nextSibling.nodeValue;
        props.setPlayerInfo(playerInfo);
        props.setActive(true);
        props.setActivePlayer(false);
    },[props])
    return (
        <>
            <div className={Classes.activePlayerList}>
                {/* Сыылка, при нажатии на которую откроется окно с выбором передач*/}
                <NavLink to={path} className={Classes.gameHistoryPost} onClick={showPassWindow}>Номер
                    игрока: {props.number} </NavLink>
            </div>
        </>
    );
}
export default PlayerSubItem;