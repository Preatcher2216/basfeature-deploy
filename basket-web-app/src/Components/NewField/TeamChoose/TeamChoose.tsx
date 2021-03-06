import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import Classes from './TeamChoose.module.css'
import './TeamChoose.css'
import {useDispatch, useSelector} from "react-redux";
import {getAddedTeams} from "../../NewMainPage/Main-Preson-Selectors";
import {
    clearClicks, enemyPlayerObjForGame,
    gameIsStart, myPlayerObjForGame,
    setEnemyTeamValue,
    setMyTeamValue,
} from "../../../Redux/Redusers/Game-Window/choose-team-reducer";

type TeamChoosePropsType = {}

const TeamChoose: React.FC<TeamChoosePropsType> = ({}) => {

    const {Option} = Select;

    const [chosenMyTeam, setChosenMyTeam] = useState('')
    const [chosenEnemyTeam, setChosenEnemyTeam] = useState('')
    const [isGame, setIsGame] = useState(true)

    const addedTeams = useSelector(getAddedTeams)

    const dispatch = useDispatch()

    const myTeam = addedTeams.filter((el:any) => el.isMyTeam === true)
    const enemyTeam = addedTeams.filter((el:any) => el.isMyTeam === false)
    const selectMyTeam = addedTeams.filter((el:any) => el.teamTitle === chosenMyTeam)
    const selectEnemyTeam = addedTeams.filter((el:any) => el.teamTitle === chosenEnemyTeam )
    const myTeamForSelect = myTeam.map((elem:any) =>  <Option value={elem.teamTitle} >{elem.teamTitle}</Option>)
    const enemyTeamForSelect = enemyTeam.map((elem:any) =>  <Option value={elem.teamTitle} >{elem.teamTitle}</Option>)

    const setMyFilterTeams = (selectMyTeam: any, chosenMyTeam: any) => {
        dispatch(setMyTeamValue(selectMyTeam, chosenMyTeam))
    }
    const setEnemyFilterTeams = (selectEnemyTeam: any, chosenEnemyTeam: any) => {
        dispatch(setEnemyTeamValue(selectEnemyTeam, chosenEnemyTeam))
    }

    useEffect(() => {
        setMyFilterTeams(selectMyTeam, chosenMyTeam)
    }, [selectMyTeam])

    useEffect(() => {
        setEnemyFilterTeams(selectEnemyTeam, chosenEnemyTeam)
    }, [selectEnemyTeam])

    const startGame =  () => {
        // setIsGame(prev => prev = true)
        dispatch(gameIsStart(isGame))
        dispatch(myPlayerObjForGame())
        dispatch(enemyPlayerObjForGame())
        dispatch(clearClicks())
    }

    function onChange(value: any) {
        setChosenMyTeam(value)
    }
    function onEnemyChange(value: any) {
        setChosenEnemyTeam(value)
    }

    function onBlur() {
    }
    function onFocus() {
    }
    function onSearch(val: any) {
    }

    const styles = {
        width: "auto",
        border: "none",
        backgroundColor: "rgb(73, 61, 78);",

    }

    return (
        <div className={Classes.TeamChooseWrapper}>
            <div className={Classes.SelectWrapper}>
                <div className={Classes.SelectBlock}>
                    <span className={Classes.SelectTitle}>?????? ??????????????</span>
                    <Select
                        className={Classes.Select}
                        showSearch
                        style={{...styles}}
                        placeholder="???????????????? ??????????????"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {myTeamForSelect}
                    </Select>
                </div>
                <div className={Classes.SelectBlock}>
                    <span className={Classes.SelectTitle}>?????????????? ????????????????????</span>
                    <Select
                        className={Classes.Select}
                        showSearch
                        style={{...styles}}
                        placeholder="???????????????? ??????????????"
                        optionFilterProp="children"
                        onChange={onEnemyChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {enemyTeamForSelect}
                    </Select>
                </div>
            </div>
            <button className={Classes.SelectBtn} onClick={startGame}>???????????? ????????</button>
        </div>
    );
}

export default TeamChoose;