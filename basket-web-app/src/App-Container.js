import React from 'react';
import {connect} from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return{
        login: state.auth.authorization
    }
}
let mapDispatchToProps = (dispatch) => {
    return{

    }
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;