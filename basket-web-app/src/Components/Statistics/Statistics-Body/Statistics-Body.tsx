import React, {useEffect, useRef, useState} from "react"
import Classes from './Statistics-Body.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getListOfGamesThunk, setEmail} from "../../../Redux/Redusers/Game-Window/backend-statistic";
import {getApiKey, getListOfGame, getOneGame} from "../../NewMainPage/Main-Preson-Selectors";
import GamesElements from "./Games-Elements/Games-Elements";
import PopupPlayersChoose from "../../Modal/Players-Choose/Popup-Players-Choose";

const StatisticsBody = ({}) => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const apiKey = useSelector(getApiKey)
    const listOfGames = useSelector(getListOfGame)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        dispatch(getListOfGamesThunk(apiKey))
    }, [])

    let games

    try {
        games = listOfGames.map((el: any) => {
            return(
                <GamesElements team1={el.team1} team2={el.team2} date={el.date}/>
            )
        })
    }
    catch (e) {
        console.log(e)
    }

    const inputOnBlur = (event: any) => {
        setInputValue(event.target.value)
    }
    const sendBtn = () => {
        dispatch(setEmail(inputValue))
        // @ts-ignore
        inputRef.current.value = ''
    }

    return (
        <div className={Classes.MainWrapper}>
            <div className={Classes.EmailBlock}>
                <span
                    className={Classes.Text}>Введите email для получения доступа просмотра статистики после игры</span>
                <div className={Classes.EmailWrapper}>
                    <input className={Classes.InputEmail} type="text" placeholder=' Введите email' onBlur={inputOnBlur} ref={inputRef}/>
                    <button className={Classes.SubmitBtn} onClick={sendBtn}>Отправить</button>
                </div>
            </div>
            <div className={Classes.StatisticsBlock}>
                <span className={Classes.Text}>Статистика последних игр</span>
                <div className={Classes.Games} ref={wrapperRef}>{games}</div>
            </div>
        </div>
    )
}

export default StatisticsBody