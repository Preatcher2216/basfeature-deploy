import React from 'react';
import Classes from './Game-Window.module.css'
import FieldContainer from "./Field/FieldContainer";
import GameHistoryContainer from "./Game-History/Game-History-Container";
import PlayerChangeContainer from "./Player-Change/Player-Change-Container";
import {Redirect} from "react-router-dom";

type PropsType = {
    login: boolean
}

const GameWindow: React.FC<PropsType> = ({login}) => {
    if(login === false) return <Redirect to="/login"/>

    return (
        <div className={Classes.content}>
            <PlayerChangeContainer/>
            <FieldContainer/>
            <GameHistoryContainer/>
        </div>
    );
}

export default GameWindow