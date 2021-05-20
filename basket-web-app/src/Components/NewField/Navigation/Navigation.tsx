import React, {memo, useState} from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getFirstName, getLastName} from "../../NewMainPage/Main-Preson-Selectors";
import Classes from './Navigation.module.css'
import {exitActiveSession} from "../../../Redux/Redusers/Authorization/authorization-reducer";
import NavigationLinks from "../../Extra/Navigation-Links/Navigation-Linls";
import './../../Extra/Mobile-Navigation.css'

type NavigationPropsType = {}

const Navigation: React.FC<NavigationPropsType> = ({}) => {


    return (
        <div className='DesktopNavigation'>
            <div className={Classes.NavigationMenu}>



                <NavigationLinks/>


            </div>
        </div>
    );
}

export default memo(Navigation);