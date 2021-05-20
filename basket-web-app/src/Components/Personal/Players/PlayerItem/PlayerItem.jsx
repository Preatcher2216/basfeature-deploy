import React from 'react';
import Classes from './PlayerItem.module.css';
import {NavLink} from "react-router-dom";

const PlayerItem = (props) => {
    let path = '/personal/players/' + props.id;
    return (
        <div className={Classes.playerNames}>
            <NavLink to={path} className={Classes.playerNamesItem}>{props.name}</NavLink>
        </div>
    );
}

export default PlayerItem;