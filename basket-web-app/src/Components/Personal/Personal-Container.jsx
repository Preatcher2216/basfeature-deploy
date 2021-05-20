import React from 'react';
import {connect} from "react-redux";
import Personal from "./Personal";

let mapStateToProps = (state) => {
    return{
        login: state.auth.authorization,
    }
}


const PersonalContainer = connect(mapStateToProps, {})(Personal);
export default PersonalContainer;