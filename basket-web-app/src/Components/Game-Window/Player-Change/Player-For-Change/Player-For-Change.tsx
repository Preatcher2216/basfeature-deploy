import React from 'react';
import Classes from './Player-For-Change.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    number: string
    setModalActive: (param:boolean) => void
}

const PlayerForChange: React.FC<PropsType> = ({number, setModalActive}) => {
    let path ='/game/playerChange/';
    let sayHello = () => {
        setModalActive(true);
    }
    return(
        <div className={Classes.wrapper}>
            <NavLink to={path} className={Classes.playerDisable} onClick={sayHello }>Замена №{number}</NavLink>
        </div>
    );
}

export default PlayerForChange