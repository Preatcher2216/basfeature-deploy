import React from 'react';
import {connect} from "react-redux";
import LoginPage from "./Login-Page";
import {loginThunkCreator, personInfo, personLogin} from "../../Redux/Redusers/Authorization/authorization-reducer";
import { RootState } from '../../Redux/redux-store'


let mapStateToProps = (state: RootState) => {

    return{
        // @ts-ignore
        login: state.auth.authorization
    }
}

const LoginPageContainer = connect(mapStateToProps, {personLogin, personInfo, loginThunkCreator})(LoginPage);
export default LoginPageContainer;