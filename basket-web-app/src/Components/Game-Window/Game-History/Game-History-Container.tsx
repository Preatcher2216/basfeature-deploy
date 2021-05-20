import React from 'react';
import GameHistory from "./Game-History";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        window_name: state.gameHistory.windowName,
        state: state.gameHistory.history
    }
}

const GameHistoryContainer = connect(mapStateToProps, {})(GameHistory);

export default GameHistoryContainer;