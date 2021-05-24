import React, {useCallback, useEffect, useRef, useState} from 'react';
import Classes from './Field.module.css'
import './Field.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getArrayOfMyPlayers,
    getArrayOfEnemyPlayers,
    getFinalMyPlayersForGame,
    getSelectMyTeamTitle,
    getSelectEnemyTeamTitle,
    getHistory,
    getFinalEnemyPlayersForGame,
    getPiecePass, getActionCounter, getMyPlayersForGame, getEnemyPlayersForGame, getIsMyTeam2
} from '../../NewMainPage/Main-Preson-Selectors';
import PopupPlayersChoose from "../../Modal/Players-Choose/Popup-Players-Choose";
import SuccessImg from './../../../Images/SuccessAction.svg'
import FailImg from './../../../Images/FailAction.svg'
import {
    addActionToFieldPiece,
    addThrows,  chooseTeam1,
    createStatistic,
    setFieldPart,
    setGameAction
} from "../../../Redux/Redusers/Game-Window/game-statistic";
import {
    myPlayerObjForGame,
    setActiveEnemyPlayersForGame,
    setActiveMyPlayersForGame
} from "../../../Redux/Redusers/Game-Window/choose-team-reducer";
import AllPassStatistics from "../../Game-Window/Field/Statistics/All-Pass-Statistics";
import PlayerItem from "../SquardList/Player-Item/Player-Item";
import MyElements from "./My-Elements/My-Element";
import EnemyElements from "./Enemy-Elements/Enemy-Element";
// import ChangePopup from "./Change-Popup/Change-Popup";

type FieldPropsType = {}

// @ts-ignore
const Field: React.FC<FieldPropsType> = ({}) => {

    const [crutch1, setCrutch1] = useState(false)
    const [show, setShow] = useState(false)
    const [isChangeWindow, setIsChangeWindow] = useState(false)
    const [isChangeWindowEnemy, setIsChangeWindowEnemy] = useState(false)
    const [crutch, setCrutch] = useState(0)
    const [statistics, setStatistics] = useState(false)
    const myTeam = useSelector(getArrayOfMyPlayers)
    const enemyTeam = useSelector(getArrayOfEnemyPlayers)
    const textMyeTeam = useSelector(getFinalMyPlayersForGame)
    const finalEnemyTeam = useSelector(getFinalEnemyPlayersForGame)
    const myTeamTitle = useSelector(getSelectMyTeamTitle)
    const enemyTeamTitle = useSelector(getSelectEnemyTeamTitle)
    const historyUpdate = useSelector(getHistory)
    const gameStatistics = useSelector(getPiecePass)
    const actionCounter = useSelector(getActionCounter)
    const myPlayersForGame = useSelector(getMyPlayersForGame)
    const enemyPlayersForGame = useSelector(getEnemyPlayersForGame)
    const isMyTeam = useSelector(getIsMyTeam2)
    const example = useRef<string>('')
    console.log('isMyTeam')
    console.log(isMyTeam)




    const dispatch = useDispatch()

    useEffect(() => {
         
        dispatch(setActiveMyPlayersForGame());
        dispatch(setActiveEnemyPlayersForGame())
        setCrutch(crutch + 1)
    }, [])


    let team:string
    useEffect(() => {
        example.current = isMyTeam ? myTeamTitle : enemyTeamTitle
    }, [isMyTeam])

    console.log('example.current')
    // @ts-ignore
    console.log(example.current)

    const showPass = (e: any) => {
         
        setShow(true);
        console.log(e.currentTarget.href.baseVal)
        dispatch(setFieldPart(e.currentTarget.id))
    }

    const showChangeWindow = () => {
        setIsChangeWindow(true)
    }

    const showChangeWindowEnemy = () => {
        setIsChangeWindowEnemy(true)
    }


    const closeResultPassWindow = (e: any) => {
         
        setShow(false);
        const action = e.currentTarget.outerText === 'Успех' ? true : false
        dispatch(createStatistic('player', example.current))
        dispatch(setGameAction(action))
        dispatch(addThrows())
        dispatch(addActionToFieldPiece())
        dispatch(chooseTeam1())
    }

    const closeUnResultPassWindow = (e: any) => {
         
        setShow(false);
        const action = e.currentTarget.outerText === 'Неудача' ? false : true
        dispatch(createStatistic('player', example.current))
        dispatch(setGameAction(action))
        dispatch(addThrows())
        dispatch(addActionToFieldPiece())
        dispatch(chooseTeam1())
    }

    const closeBtn = useCallback(() => {
        setShow(false);
    }, [])

    const pass = () => {
        console.log('Clicked')
    }

    const openAllStatistics = () => {
        setStatistics(true)
    }

    const myPlayersForGameElements = myPlayersForGame.map((el:any) => {
        return(
            <MyElements teamNumbers={el.teamNumbers}/>
        )
    })

    const enemyPlayersForGameElements = enemyPlayersForGame.map((el:any) => {
        return(
            <EnemyElements teamNumbers={el.teamNumbers}/>
        )
    })

    const changeMyTeam = myTeam.filter((el: any) => myTeam.indexOf(el) > 4)
    return (
        <div className={Classes.Field}>
            <div className={Classes.MainElements}>
                <div className={Classes.FieldWrapper}>
                    <div className={Classes.Wrapper}>
                        <span className={Classes.TeamTitle}>{myTeamTitle}</span>
                        <div className={Classes.MyTeams}>
                            <div className={Classes.MyTeamElements}>
                                {myPlayersForGameElements}
                            </div>
                        </div>
                    </div>
                    <div className={Classes.FieldMain}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1345" height="755"
                             viewBox="0 0 1558 881">
                            <NavLink to='/newGame/14' id='14' onClick={showPass}>
                                <path
                                    d="M973 104.5C973 211.919 885.919 299 778.5 299C671.081 299 584 211.919 584 104.5C584 66.324 594.999 30.7168 614 0.674339C661.5 1.00006 705.757 0.674316 775 0.674316C844.243 0.674316 880 0.674339 943 0.674339C962.001 30.7168 973 66.324 973 104.5Z"
                                    fill="#FFA859"/>
                            </NavLink>
                            <NavLink to='/newGame/13' id='13' onClick={showPass}>
                                <path
                                    d="M1168 99.6224C1168 65.5493 1163.63 32.4981 1155.42 1L943 1.00005C984 65.0797 973.806 143.677 958 179.722C943.511 212.763 921.5 243.802 878 271.336L973.5 437C1089.77 369.656 1168 243.786 1168 99.6224Z"
                                    fill="#FFD8B5"/>
                            </NavLink>
                            <NavLink to='/newGame/12' id='12' onClick={showPass}>
                                <path
                                    d="M779 489C849.824 489 916.228 470.073 973.429 437L878.5 271C878.5 271 835.5 300 777 299C718.5 298 678.5 271 678.5 271L583.5 436.378C640.942 469.835 707.733 489 779 489Z"
                                    fill="#FFC592"/>
                            </NavLink>
                            <NavLink to='/newGame/11' id='11' onClick={showPass}>
                                <path
                                    d="M389 99.6224C389 65.5493 393.37 32.4981 401.579 1L614 1.00005C573 65.0797 583.194 143.677 599 179.722C613.489 212.763 635.5 243.802 679 271.336L583.5 437C467.228 369.656 389 243.786 389 99.6224Z"
                                    fill="#FFD8B5"/>
                            </NavLink>
                            <NavLink to='/newGame/10' id='10' onClick={showPass}>
                                <path
                                    d="M195 104C195 68.8551 198.104 34.4354 204.054 1H402.609C402.609 1 379 82 397 174C415 266 465.5 330.5 465.5 330.5L306 446.602C236.174 350.367 195 231.992 195 104Z"
                                    fill="#FFC592"/>
                            </NavLink>
                            <NavLink to='/newGame/9' id='9' onClick={showPass}>
                                <path
                                    d="M465.5 330.5L306 446.602C377.789 545.543 479.864 621.082 598.614 659.609L660 470.5C660 470.5 601.5 451.5 551.5 415.5C501.5 379.5 465.5 330.5 465.5 330.5Z"
                                    fill="#FFA859"/>
                            </NavLink>
                            <NavLink to='/newGame/8' id='8' onClick={showPass}>
                                <path
                                    d="M779 688C841.994 688 902.658 678.026 959.5 659.572L898 470.5C898 470.5 844 489 779 489C714 489 660 470.5 660 470.5L598.5 659.572C655.342 678.026 716.006 688 779 688Z"
                                    fill="#FFD8B5"/>
                            </NavLink>
                            <NavLink to='/newGame/7' id='7' onClick={showPass}>
                                <path
                                    d="M1092.5 330.5L1252 446.602C1180.21 545.543 1078.14 621.082 959.386 659.609L898 470.5C898 470.5 956.5 451.5 1006.5 415.5C1056.5 379.5 1092.5 330.5 1092.5 330.5Z"
                                    fill="#FFA859"/>
                            </NavLink>
                            <NavLink to='/newGame/6' id='6' onClick={showPass}>
                                <path
                                    d="M1363 104C1363 68.8551 1359.9 34.4354 1353.95 1H1155.39C1155.39 1 1179 82 1161 174C1143 266 1092.5 330.5 1092.5 330.5L1252 446.602C1321.83 350.367 1363 231.992 1363 104Z"
                                    fill="#FFC592"/>
                            </NavLink>
                            <NavLink to='/newGame/5' id='5' onClick={showPass}>
                                <path
                                    d="M1363 104C1363 68.8551 1359.9 34.4354 1353.95 1H1558V330L1317.87 329.5C1346.94 260.118 1363 183.934 1363 104Z"
                                    fill="#FFA859"/>
                            </NavLink>
                            <NavLink to='/newGame/4' id='4' onClick={showPass}>
                                <path
                                    d="M1558 882V330L1317.87 329.5C1252.56 485.396 1121.57 606.955 959.5 659.572L1032 882H1558Z"
                                    fill="#FFD8B5"/>
                            </NavLink>
                            <NavLink to='/newGame/3' id='3' onClick={showPass}>
                                <path
                                    d="M598.5 659.572C655.342 678.026 716.006 688 779 688C841.994 688 902.658 678.026 959.5 659.572L1032 882H527L598.5 659.572Z"
                                    fill="#FFA859"/>
                            </NavLink>
                            <NavLink to='/newGame/2' id='2' onClick={showPass}>
                                <path
                                    d="M0 882H527L598.5 659.572C436.608 607.011 305.722 485.656 240.338 330L0 329.5V882Z"
                                    fill="#FFD8B5"/>
                            </NavLink>
                            <NavLink to='/newGame/1' id='1' onClick={showPass}>
                                <path
                                    d="M204.054 1C198.104 34.4354 195 68.8552 195 104C195 184.126 211.137 260.484 240.338 330L0 329.5V1H204.054Z"
                                    fill="#FFA859"/>
                            </NavLink>
                        </svg>
                    </div>
                    <div className={Classes.Wrapper}>
                        <span className={`${Classes.TeamTitle} ${Classes.TeamTitleEnemy}`}>{enemyTeamTitle}</span>
                        <div className={Classes.MyTeams}>
                            <div className={Classes.MyTeamElements}>
                                {enemyPlayersForGameElements}
                            </div>
                            {/*<div className={`${Classes.MyPlayersChange} ${Classes.MyPlayersChangeEnemy}`} onClick={showChangeWindowEnemy}>Замена</div>*/}
                        </div>
                    </div>
                </div>
                {
                    statistics ? (<AllPassStatistics statistics={setStatistics} fieldPieces={gameStatistics}
                                                     allGamePass={actionCounter}/>) :
                        (<button className={Classes.MessageBtn}
                                 onClick={openAllStatistics}>Показать статистику</button>)
                }
            </div>

            <PopupPlayersChoose active={show} setActive={setShow}>
                <div className={Classes.Action}>
                    <span className={Classes.Sector}>Сектор</span>

                    <div className={Classes.ButtonsWrapper}>
                        <div className={Classes.SuccessBtnWrapper} onClick={closeResultPassWindow}>
                            <img src={FailImg} alt="" style={{width: '80px', margin: 'auto'}} className={Classes.Img}/>
                            <span
                                className={Classes.Btn + " " + Classes.resultPass}>Успех
                            </span>
                        </div>
                        <div className={Classes.FailBtnWrapper} onClick={closeUnResultPassWindow}>
                            <img src={SuccessImg} alt="" style={{width: '80px', margin: 'auto'}}/>
                            <span
                                className={Classes.Btn + " " + Classes.unResultPass}>Неудача
                            </span>
                        </div>
                    </div>
                    <button className={Classes.PopupWindowBtn} onClick={closeBtn}>Отмена</button>
                </div>
            </PopupPlayersChoose>

            <PopupPlayersChoose active={isChangeWindow} setActive={setIsChangeWindow}>
                <h1>Блок замены игроков для моих команд</h1>
                {changeMyTeam}
            </PopupPlayersChoose>

            <PopupPlayersChoose active={isChangeWindowEnemy} setActive={setIsChangeWindowEnemy}>
                <h1>Блок замены игроков для команд противника</h1>
                {enemyTeam}
            </PopupPlayersChoose>


        </div>


    );
}

export default Field;