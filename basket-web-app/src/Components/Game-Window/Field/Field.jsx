import React, {useCallback, useEffect, useState} from 'react';
import Classes from './Field.module.css'
import {NavLink} from "react-router-dom";
import PopupPlayersChoose from "../../Modal/Players-Choose/Popup-Players-Choose";
import PlayerSubItem from "./Player-Item/Player-Item";
import AllPassStatistics from "./Statistics/All-Pass-Statistics";
import {
    clickLogger,
    passCounter,
    playerFinder,
    playerPassCounter
} from "../../../Redux/Redusers/Game-Window/pass-manager-reducer";
import {updateHistory} from "../../../Redux/Redusers/Game-Window/game-history-reducer";


const Field = (props) => {
    let renderCount=0;
    renderCount++;
    console.log(renderCount);
    // Количество передач
    let [pass, setPass] = useState(0);
    // Всплывающее окно статистики
    let [statistics, setStatistics] = useState(false);
    // Название кнопки с результативной передачей
    let result = 'Успешно';
    // Название кнопки с нерезультативной передачей
    let unResult = 'Неуспешно';
    // Номер игрока
    let [playerInfo, setPlayerInfo] = useState('');
    // Ссылка на фрагмент поля
    let [rend, setRend] = useState(null);
    // Название сектора на русском языке
    let [field, setField] = useState("");
    /* Задание начальных параметров у окна с передачами*/
    let [show, setShow] = useState(false);
    /*Задание начальных параметров у окна с активными игроками*/
    let [modalActive, setModalActive] = useState(false);
    debugger
    /* Создание массива клмпонент с активными игроками*/

    let playersElement = props.actualTeam.map(player  => <PlayerSubItem setPlayerInfo={ setPlayerInfo} rend={rend}
                                                                       number={player.number} key={player.id}
                                                                       active={show} setActive={setShow}
                                                                        setActivePlayer={setModalActive}/>);

    /* Функция для отображения окна с активними игроками и добавлением их в историю */

    useEffect(() => {
        debugger
        // @ts-ignore
        setField(props.currentName);
        //setPass(props.props.allGamePass);
    }, [props.currentName, props.allGamePass])


    /* Добавление действий в историю игры*/
    let findSector = useCallback((info) => {
        debugger
        clickLogger(info);
    }, [props]);

    let updateData = useCallback((localState) => {
        debugger
        // @ts-ignore
        updateHistory(localState);
        // @ts-ignore
        showPass();
    }, [props]);

    const showPass = (e) => {
        debugger
        setModalActive(true);

        let info = e.currentTarget.href.baseVal;
        setRend(info);
        setPass(pass + 1);
    }

    if (modalActive === false) {
        debugger
        findSector(rend);
        playerFinder(playerInfo);
        // @ts-ignore
        if (field === props.currentName && modalActive === true) {
            updateData(field);
        }
    } else if (modalActive === true) {
        playerFinder(playerInfo);
    }

    /* Функция для скрытия окна с выбором передач */
    const closeResultPassWindow = useCallback(() => {
        debugger
        let passOnField = true;
        passCounter(field,pass,passOnField);
        playerPassCounter(playerInfo);
        // @ts-ignore
        updateHistory(field, playerInfo, result);
        // @ts-ignore
        showPass();
        setShow(false);
    }, [ field, playerInfo, result, pass])

    const closeUnResultPassWindow = useCallback(() => {
        debugger
        let passOnField = false;
        passCounter(field,pass,passOnField);
        playerPassCounter(playerInfo);
        // @ts-ignore
        updateHistory(field, playerInfo, unResult);
        // @ts-ignore
        showPass();
        setShow(false);
    }, [ field, playerInfo, unResult, pass])

    const openAllStatistics = () => {
        debugger
        //statisticsOpened = true;
        setStatistics(true)
        alert(
            "Всего передач - " + props.allGamePass + '\n' +
            "Первый сектор - " + props.allFieldPiece[0].pass + '\n' +
            "Второй сектор - " + props.allFieldPiece[1].pass + '\n' +
            "Третий сектор - " + props.allFieldPiece[2].pass + '\n' +
            "Четвертый сектор - " + props.allFieldPiece[3].pass + '\n' +
            "Пятый сектор - " + props.allFieldPiece[4].pass + '\n' +
            "Шестой сектор - " + props.allFieldPiece[5].pass + '\n' +
            "Сельмой сектор - " + props.allFieldPiece[6].pass + '\n' +
            "Восьмой сектор - " + props.allFieldPiece[7].pass + '\n' +
            "Девятый сектор - " + props.allFieldPiece[8].pass + '\n' +
            "Десятый сектор - " + props.allFieldPiece[9].pass + '\n' +
            "Одиннадцатый сектор - " + props.allFieldPiece[10].pass + '\n' +
            "Двеннадцатый сектор - " + props.allFieldPiece[11].pass + '\n' +
            "Тринадцатый сектор - " + props.allFieldPiece[12].pass + '\n' +
            "Четырнадцатый сектор - " + props.allFieldPiece[13].pass + '\n'
        );

    }

    return (
        <div>

            {/* Блок с участками поля */}

            <svg xmlns="http://www.w3.org/2000/svg" width="1345" height="755"
                 viewBox="0 0 1558 881">
                <NavLink to='/game/14' onClick={showPass}>
                    <path
                        d="M973 104.5C973 211.919 885.919 299 778.5 299C671.081 299 584 211.919 584 104.5C584 66.324 594.999 30.7168 614 0.674339C661.5 1.00006 705.757 0.674316 775 0.674316C844.243 0.674316 880 0.674339 943 0.674339C962.001 30.7168 973 66.324 973 104.5Z"
                        fill="#FFA859"/>
                </NavLink>
                <NavLink to='/game/13' onClick={showPass}>
                    <path
                        d="M1168 99.6224C1168 65.5493 1163.63 32.4981 1155.42 1L943 1.00005C984 65.0797 973.806 143.677 958 179.722C943.511 212.763 921.5 243.802 878 271.336L973.5 437C1089.77 369.656 1168 243.786 1168 99.6224Z"
                        fill="#FFD8B5"/>
                </NavLink>
                <NavLink to='/game/12' onClick={showPass}>
                    <path
                        d="M779 489C849.824 489 916.228 470.073 973.429 437L878.5 271C878.5 271 835.5 300 777 299C718.5 298 678.5 271 678.5 271L583.5 436.378C640.942 469.835 707.733 489 779 489Z"
                        fill="#FFC592"/>
                </NavLink>
                <NavLink to='/game/11' onClick={showPass}>
                    <path
                        d="M389 99.6224C389 65.5493 393.37 32.4981 401.579 1L614 1.00005C573 65.0797 583.194 143.677 599 179.722C613.489 212.763 635.5 243.802 679 271.336L583.5 437C467.228 369.656 389 243.786 389 99.6224Z"
                        fill="#FFD8B5"/>
                </NavLink>
                <NavLink to='/game/10' onClick={showPass}>
                    <path
                        d="M195 104C195 68.8551 198.104 34.4354 204.054 1H402.609C402.609 1 379 82 397 174C415 266 465.5 330.5 465.5 330.5L306 446.602C236.174 350.367 195 231.992 195 104Z"
                        fill="#FFC592"/>
                </NavLink>
                <NavLink to='/game/9' onClick={showPass}>
                    <path
                        d="M465.5 330.5L306 446.602C377.789 545.543 479.864 621.082 598.614 659.609L660 470.5C660 470.5 601.5 451.5 551.5 415.5C501.5 379.5 465.5 330.5 465.5 330.5Z"
                        fill="#FFA859"/>
                </NavLink>
                <NavLink to='/game/8' onClick={showPass}>
                    <path
                        d="M779 688C841.994 688 902.658 678.026 959.5 659.572L898 470.5C898 470.5 844 489 779 489C714 489 660 470.5 660 470.5L598.5 659.572C655.342 678.026 716.006 688 779 688Z"
                        fill="#FFD8B5"/>
                </NavLink>
                <NavLink to='/game/7' onClick={showPass}>
                    <path
                        d="M1092.5 330.5L1252 446.602C1180.21 545.543 1078.14 621.082 959.386 659.609L898 470.5C898 470.5 956.5 451.5 1006.5 415.5C1056.5 379.5 1092.5 330.5 1092.5 330.5Z"
                        fill="#FFA859"/>
                </NavLink>
                <NavLink to='/game/6' onClick={showPass}>
                    <path
                        d="M1363 104C1363 68.8551 1359.9 34.4354 1353.95 1H1155.39C1155.39 1 1179 82 1161 174C1143 266 1092.5 330.5 1092.5 330.5L1252 446.602C1321.83 350.367 1363 231.992 1363 104Z"
                        fill="#FFC592"/>
                </NavLink>
                <NavLink to='/game/5' onClick={showPass}>
                    <path
                        d="M1363 104C1363 68.8551 1359.9 34.4354 1353.95 1H1558V330L1317.87 329.5C1346.94 260.118 1363 183.934 1363 104Z"
                        fill="#FFA859"/>
                </NavLink>
                <NavLink to='/game/4' onClick={showPass}>
                    <path d="M1558 882V330L1317.87 329.5C1252.56 485.396 1121.57 606.955 959.5 659.572L1032 882H1558Z"
                          fill="#FFD8B5"/>
                </NavLink>
                <NavLink to='/game/3' onClick={showPass}>
                    <path
                        d="M598.5 659.572C655.342 678.026 716.006 688 779 688C841.994 688 902.658 678.026 959.5 659.572L1032 882H527L598.5 659.572Z"
                        fill="#FFA859"/>
                </NavLink>
                <NavLink to='/game/2' onClick={showPass}>
                    <path d="M0 882H527L598.5 659.572C436.608 607.011 305.722 485.656 240.338 330L0 329.5V882Z"
                          fill="#FFD8B5"/>
                </NavLink>
                <NavLink to='/game/1' onClick={showPass}>
                    <path
                        d="M204.054 1C198.104 34.4354 195 68.8552 195 104C195 184.126 211.137 260.484 240.338 330L0 329.5V1H204.054Z"
                        fill="#FFA859"/>
                </NavLink>
            </svg>


            {/* Компонента для отображения списка активных игроков*/}

            <PopupPlayersChoose active={modalActive} setActive={setModalActive}>
                {playersElement}
            </PopupPlayersChoose>

            {/* Компонента для отображения выбора передачи*/}

            <PopupPlayersChoose active={show} setActive={setShow}>
                <div className={Classes.passes}>
                    <button onClick={closeResultPassWindow} className={Classes.btn + " " + Classes.resultPass}>Успешно
                    </button>
                    <button onClick={closeUnResultPassWindow}
                            className={Classes.btn + " " + Classes.unResultPass}>Неуспешно
                    </button>
                </div>
            </PopupPlayersChoose>
            <br/>
            {
                statistics ? (<AllPassStatistics statistics={setStatistics} fieldPieces={props.allFieldPiece} allGamePass={props.allGamePass}/>) :
                   ( <button className={Classes.allPassStatisticsButton} onClick={openAllStatistics}>Statistics</button>)
            }

        </div>

    );
}

export default Field