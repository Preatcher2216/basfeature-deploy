import React from 'react';
import {connect} from "react-redux";
import PlayerChange from "./Player-Change";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {

    return{
        window_name: state.playerChange.windowName,
        player_name: state.playerChange.playerName,
        playersForChange: state.playerChange.playerForChange,
        // @ts-ignore
        activePlayers: state.passManager.actualTeam,
    }
}

const PlayerChangeContainer = connect(mapStateToProps,{})(PlayerChange);
export default PlayerChangeContainer;