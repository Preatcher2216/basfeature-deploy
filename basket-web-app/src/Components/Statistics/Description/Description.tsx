import React from "react";
import Classes from './Description.module.css'
import SfeduLogo from "../../../Images/Sfedu_logo.png";
import './../../NewMainPage/MainPersonPage.css'

const Description = ({}) => {

    return (
        <div className={Classes.MainWrapper}>
            <div className='HeaderDescription'
                 style={{display: 'flex', paddingBottom: '50px', alignItems: 'center'}}>
                <div className='HeaderText'>
                    <span className='SubHeaderTextOne'>Здесь вы сможете</span>
                    <span className='SubHeaderTextTwo'>Просматривать статистику прошедших матчей</span>
                </div>
                <div className='SfeduLogo'>
                    <img src={SfeduLogo} alt='Логотип ЮФУ' style={{height: '258px', width: '276px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Description