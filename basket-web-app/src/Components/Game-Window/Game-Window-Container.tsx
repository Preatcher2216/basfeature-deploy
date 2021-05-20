import React from 'react';
import {connect} from "react-redux";
import GameWindow from "./Game-Window";
import {RootState} from "../../Redux/redux-store";

let mapStateToProps = (state: RootState) => {
    return{
        login: state.auth.authorization
    }
}

const GameWindowContainer = connect(mapStateToProps,{})(GameWindow);
export default GameWindowContainer;