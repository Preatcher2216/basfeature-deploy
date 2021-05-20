import React from 'react';
import Classes from './Game-History.module.css'
import HistoryItem from "./HistoryItem/HistoryItem";

type PropsType = {
    window_name: string
    state: any
}

const GameHistory: React.FC<PropsType> = ({window_name, state}) => {
    debugger
    //-------------------------
    // Взяли массив данных из store и преобразовали его в новый массив компонент HistoryItem
    let historyElement = state
        .map((event: any) => <HistoryItem id={event.id} pass={event.pass} text={event.text} playerNumber={event.playerNumber} key={event.id}/>);
    //-------------------------

    return (
        <div className={Classes.gameHistory}>{window_name}

            {/*//-------------------------*/}
            {/*// Загрузили на страницу массив компоненет*/}
            {historyElement}

            {/*//-------------------------*/}

        </div>
    );
}

export default GameHistory