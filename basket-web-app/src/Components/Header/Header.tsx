import React from 'react';
import Classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    login: boolean
    game: string
    personal: string
    name:string
}

const Header: React.FC<PropsType> = ({login, game, personal, name}) => {
    return(
        <div className={Classes.header}>
            <NavLink to='/personal' className={Classes.headerEl}>{personal}</NavLink>
            <NavLink to='/game' className={Classes.headerEl}>{game}</NavLink>

            <div className={Classes.headerLogin}>
                {
                    login ? (`Здравствуйте,${name}`) : (<NavLink to="/login">Войдите</NavLink>)
                }
            </div>
        </div>
    );
}

export default Header