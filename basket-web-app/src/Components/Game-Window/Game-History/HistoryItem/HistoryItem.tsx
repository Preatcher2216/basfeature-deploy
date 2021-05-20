import React from 'react';
import Classes from './HistoryItem.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    text: string
    pass: boolean
    playerNumber: string
}

// Формируем компоненту для загрузки на страницу
const HistoryItem: React.FC<PropsType> = ({id, text, pass, playerNumber}) => {
    let path = '/game/history/' + id;
    return(
        // Конечная компонента, которая передает полученный через пропсы текст
        <NavLink to={path} className={Classes.gameHistoryPost}>{text} {playerNumber} {pass}</NavLink>
    );
}

export default HistoryItem;