import React from 'react';
import {
    showPass, updateHistory,
}
from "../../../Redux/Redusers/Game-Window/game-history-reducer";
import Field from "./Field";
import {connect} from "react-redux";
import {
    clickLogger,
    passCounter, playerFinder,
    playerPassCounter
}
from "../../../Redux/Redusers/Game-Window/pass-manager-reducer";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        // @ts-ignore
        actualTeam: state.passManager.actualTeam,
        // @ts-ignore
        currentName: state.passManager.fieldCurrentName,
        // @ts-ignore
        currentPlayer: state.passManager.numberCurrentPlayer,
        // @ts-ignore
        currentPass: state.passManager.passCurrentInfo,
        // @ts-ignore
        allGamePass: state.passManager.gamePassCount,
        // @ts-ignore
        allFieldPiece: state.passManager.piecePass,
        // @ts-ignore
        activePlayer: state.passManager.activePlayer,
    }
}

// @ts-ignore
const FieldContainer = connect(mapStateToProps, {
    updateHistory,
    showPass,
    clickLogger,
    playerFinder,
    passCounter,
    playerPassCounter
    // @ts-ignore
})(Field);

export default FieldContainer;