import React from 'react';
import Classes from './Players.module.css';
import {NavLink} from "react-router-dom";
import PlayerItem from "./PlayerItem/PlayerItem";
import PlayerInfo from "./PlayerInfo/PlayerInfo";

const Players = (props) => {


    let playerNameElementsData = props.playerName
        .map(player => <PlayerItem name={player.name} id={player.id}/>);
    let playerInfoElementsData = props.playerInfo
        .map(player => <PlayerInfo position={player.position} number={player.number} role={player.role}
                                   rating={player.rating}/>);

    return (
        <div className={Classes.playerContainer}>
            <div className={Classes.playerNamesWrapper}>
                {playerNameElementsData}
            </div>
            {playerInfoElementsData}
        </div>
    );
}

export default Players;