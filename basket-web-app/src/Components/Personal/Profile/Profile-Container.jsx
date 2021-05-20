import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    changeLastName, changeMiddleName,
    changeName,
    changeUserName
} from "../../../Redux/Redusers/Authorization/authorization-reducer";

let mapStateToProps = (state) => {
    return {
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        middleName: state.auth.middleName,
        apiKey: state.auth.apiKey,
        username: state.auth.loginName,
    }
}

const ProfileContainer = connect(mapStateToProps, {
    changeName,
    changeLastName,
    changeMiddleName,
    changeUserName
})(Profile);
export default ProfileContainer;