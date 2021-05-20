import React, {useState} from 'react';
import Classes from './Player-Change.module.css'
import PlayerForChange from "./Player-For-Change/Player-For-Change";
import PopupPlayersChoose from "../../Modal/Players-Choose/Popup-Players-Choose";
import ActivePlayerForChange from "./Active-Player-For-Change/Active-Player-For-Change";
import {PlayerForChangeType} from "../../../Redux/Redusers/Game-Window/player-change-reducer";
import {ActualTeamType} from "../../../Redux/Redusers/Game-Window/pass-manager-reducer";

type PropsType = {
    window_name: string
    player_name: string
    playersForChange: Array<PlayerForChangeType>
    activePlayers: Array<ActualTeamType>
}

const PlayerChange: React.FC<PropsType> = ({window_name, player_name, playersForChange, activePlayers}) => {

    const [modalActive, setModalActive] = useState(false);

    let playerForChangeList = playersForChange.map(playerInfo => <PlayerForChange number={playerInfo.number}
                                                                                          setModalActive={setModalActive}/>)
    let activePlayersList = activePlayers.map((activePlayerInfo) => <ActivePlayerForChange number={activePlayerInfo.number}/>)

    return (
        <div className={Classes.playerChange}>{window_name}

            {playerForChangeList}

            <PopupPlayersChoose active={modalActive} setActive={setModalActive}>
                {activePlayersList}
            </PopupPlayersChoose>

        </div>
    );
}

export default PlayerChange