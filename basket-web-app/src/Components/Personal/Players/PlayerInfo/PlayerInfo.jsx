import React from 'react';
import Classes from './PlayerInfo.module.css';

const PlayerInfo = (props) => {
    return (
        <div className={Classes.playerInfo}>
            <div>Позиция: {props.position}</div>
            <div>Номер: {props.number}</div>
            <div>Роль: {props.role}</div>
            <div>Рейтинг: {props.rating}</div>
        </div>
    );
}

export default PlayerInfo