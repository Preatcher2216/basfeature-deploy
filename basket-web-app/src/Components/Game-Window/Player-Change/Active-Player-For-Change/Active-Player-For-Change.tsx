import React from 'react';
import Classes from './Active-Player-For-Change.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    number: string
}

const ActivePlayerForChange: React.FC<PropsType> = ({number}) => {
    let path ='/game/playerChange/';
    let sayHello = () => {
        alert('Hello');
    }
    return(
        <div className={Classes.wrapper}>
            <NavLink to={path} className={Classes.gameHistoryPost} onClick={sayHello }>Номер
                игрока: {number} </NavLink>
        </div>
    );
}

export default ActivePlayerForChange