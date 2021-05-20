import React from 'react';
import {connect} from "react-redux";
import Players from "./Players";

let mapStateToProps = (state) => {
    return {
        playerName: state.players.playerNameData,
        playerInfo: state.players.playerInfoData,
    }
}

const PlayersContainer = connect(mapStateToProps, {})(Players);

export default PlayersContainer;