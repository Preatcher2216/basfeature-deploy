import React, {memo} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Route} from "react-router-dom"
import GameWindowContainer from "./Components/Game-Window/Game-Window-Container"
import LoginPageContainer from "./Components/Login-Page/Login-Page-Container"
import PersonalContainer from "./Components/Personal/Personal-Container"
import {Button, Layout} from 'antd';
import {MainPersonPage} from "./Components/NewMainPage/MainPersonPage";
import NewField from "./Components/NewField/NewField";
import AboutUs from "./Components/About-Us/AboutUs";
import Statistics from "./Components/Statistics/Statistics";

const {Header, Content, Footer} = Layout;

const App = (props) => {
    return (
        <>
            <Route path='/game'render={() => <GameWindowContainer/>}/>
            <Route path='/personal' render={() => <PersonalContainer/>}/>
            <Route path='/login' render={() => <LoginPageContainer/>}/>
            <Route exact path='/' render={() => <MainPersonPage/>}/>
            <Route path='/newGame' render={() => <NewField/>}/>
            <Route path='/about_us' render={() => <AboutUs/>}/>
            <Route path='/statistics' render={() => <Statistics/>}/>
        </>
    );
}

export default App
