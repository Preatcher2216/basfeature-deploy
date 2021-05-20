import React from 'react';
import Classes from './Personal.module.css';
import LeftMenu from "./Left-Menu/LeftMenu";
import {Redirect, Route} from "react-router-dom";
import TeamsContainer from "./Teams/Teams-Container";
import PlayersContainer from "./Players/Players-Container";
import ProfileContainer from "./Profile/Profile-Container";

const Personal = (props) => {
    if(props.login === false) return <Redirect to="/login"/>
    return (
        <div className={Classes.content}>
            <LeftMenu/>
            <Route path='/personal/teams'
                   render={() => <TeamsContainer/>}/>
            <Route path='/personal/players'
                   render={() => <PlayersContainer/>}/>
            <Route path='/personal/profile'
                   render={() => <ProfileContainer/>}/>
        </div>

    );

}

export default Personal;