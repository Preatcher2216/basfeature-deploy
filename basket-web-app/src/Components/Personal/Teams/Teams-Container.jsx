import React from 'react';
import Classes from './Teams.module.css';
import {connect} from "react-redux";
import Teams from "./Teams";

let mapStateToProps = (state) => {
    return {}
}

const TeamsContainer = connect(mapStateToProps, {})(Teams);
export default TeamsContainer;