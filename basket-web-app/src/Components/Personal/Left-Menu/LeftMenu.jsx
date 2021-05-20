import React from 'react';
import Classes from './LeftMenu.module.css'
import {NavLink} from "react-router-dom";

const LeftMenu = (props) => {
    return (
        <div className={Classes.leftMenu}>Меню
            <NavLink to='/personal/profile' className={Classes.leftMenuItem}>Профиль</NavLink>
            <NavLink to='/personal/teams' className={Classes.leftMenuItem}>Команды</NavLink>
            <NavLink to='/personal/players' className={Classes.leftMenuItem}>Игроки</NavLink>
            <NavLink to='/personal/games' className={Classes.leftMenuItem}>Игры</NavLink>
            <NavLink to='/personal/statistics' className={Classes.leftMenuItem}>Статистика</NavLink>
        </div>
    );
}

export default LeftMenu