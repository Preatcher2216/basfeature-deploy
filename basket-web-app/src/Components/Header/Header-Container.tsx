import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import { RootState } from '../../Redux/redux-store'


let mapStateToProps = (state: RootState) => {
    return{
        login: state.auth.authorization,
        game: "Игра",
        personal: "Личный кабинет",
        name: state.auth.firstName
    }
}

const HeaderContainer = connect(mapStateToProps,{})(Header);
export default HeaderContainer;