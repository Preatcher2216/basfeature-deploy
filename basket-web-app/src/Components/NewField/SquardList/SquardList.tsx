import React, {useEffect, useState} from 'react';
import Classes from './SquardList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    getSelectEnemyTeam,
    getSelectEnemyTeamTitle,
    getSelectMyTeam,
    getSelectMyTeamTitle, getUrlResponse
} from "../../NewMainPage/Main-Preson-Selectors";
import PlayerItem from "./Player-Item/Player-Item";
import EnemyItem from "./Enemy-Item/Enemy-Item";
import {setSquardActive} from "../../../Redux/Redusers/Game-Window/game-statistic";

type SquardListPropsType = {}

const SquardList: React.FC<SquardListPropsType> = ({}) => {

    const myTeam = useSelector(getSelectMyTeam)
    const myTeamTitle = useSelector(getSelectMyTeamTitle)
    const enemyTeam = useSelector(getSelectEnemyTeam)
    const enemyTeamTitle = useSelector(getSelectEnemyTeamTitle)
    const urlResponse = useSelector(getUrlResponse)

    const selectMyTeam = myTeam.filter((el:any) => el.teamTitle === myTeamTitle)
    const selectEnemyTeam = enemyTeam.filter((el:any) => el.teamTitle === enemyTeamTitle )

    const onClick = () => {
        alert('Hello')
    }

    let dynamicMyTeamTitle: any
    let dynamicEnemyTeamTitle: any
    try {
          dynamicMyTeamTitle =  selectMyTeam[0].teamTitle
          dynamicEnemyTeamTitle =  selectEnemyTeam[0].teamTitle
    }
    catch (e) {
        console.log(e)
    }

    const myTeamPlayers = selectMyTeam.map((el:any) => {
        return(
            <PlayerItem teamNumbers={el.teamNumbers} isMyTeam={el.isMyTeam} isClicked={false} teamNames={el.teamPlayers} />
        )
    })
    const enemyTeamPlayers = selectEnemyTeam.map((el:any) => {
        return(
            <EnemyItem teamNumbers={el.teamNumbers} isMyTeam={el.isMyTeam} isClicked={false} teamNames={el.teamPlayers} />
        )
    })
    console.log('myTeamPlayers')
    console.log(myTeamPlayers)
    return (
        <div className={Classes.SquardList}>
            <span className={Classes.Title}>Выберите основной состав команд</span>
            <div className={Classes.SquardWrapper}>
                <div className={Classes.MyTeam}>
                    <span className={Classes.TeamTitle}>{dynamicMyTeamTitle}</span>
                    <div className={Classes.MyPlayers}>
                        {myTeamPlayers}
                    </div>
                </div>
                <div className={Classes.EnemyTeam}>
                    <span className={Classes.TeamTitle}>{dynamicEnemyTeamTitle}</span>
                    <div className={Classes.MyPlayers}>
                        {enemyTeamPlayers}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SquardList;