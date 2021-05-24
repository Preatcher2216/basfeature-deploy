import {addGame, getListOfGames} from "../../../API/API";

const CREATE_STATISTIC_FOR_MY_TEAM = 'CREATE_STATISTIC_FOR_MY_TEAM'
const CREATE_STATISTIC_FOR_ENEMY_TEAM = 'CREATE_STATISTIC_FOR_ENEMY_TEAM'
const SET_CHOSEN_PLAYER = 'SET_CHOSEN_PLAYER'
const SET_FIELD_PART = 'SET_FIELD_PART'
const SET_GAME_ACTION = 'SET_GAME_ACTION'
const ADD_THROWS = 'ADD_THROWS'
const CREATE_STATISTIC = 'CREATE_STATISTIC'
const REMOVE_HISTORY_ELEMENT = 'REMOVE_HISTORY_ELEMENT'
const CLEAR_HISTORY = 'CLEAR_HISTORY'
const CLEAR_FIELD_PIECE = 'CLEAR_FIELD_PIECE'
const CLEAR_THROWS = 'CLEAR_THROWS'
const ADD_ACTION_TO_FIELD_PIECE = 'ADD_ACTION_TO_FIELD_PIECE'
const SET_SQUARD_ACTIVE = 'SET_SQUARD_ACTIVE'
const CHOOSE_TEAM1 = 'CHOOSE_TEAM1'

type allPassType = {
    playerNumber: number
    action: boolean
    sector: number
}
export type PiecePassType = {
    id: string
    href: string
    fieldName: string
    resultPass: number
    unResultPass: number
    pass: number
}


let initialState = {
    piecePass: [
        {
            id: '1', href: '/newGame/1', fieldName: 'Первый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '2', href: '/newGame/2', fieldName: 'Второй сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '3', href: '/newGame/3', fieldName: 'Третий сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '4', href: '/newGame/4', fieldName: 'Четвертый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '5', href: '/newGame/5', fieldName: 'Пятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '6', href: '/newGame/6', fieldName: 'Шестой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '7', href: '/newGame/7', fieldName: 'Седьмой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '8', href: '/newGame/8', fieldName: 'Восьмой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '9', href: '/newGame/9', fieldName: 'Девятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '10', href: '/newGame/10', fieldName: 'Десятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '11', href: '/newGame/11', fieldName: 'Одиннадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '12', href: '/newGame/12', fieldName: 'Двенадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '13', href: '/newGame/13', fieldName: 'Тринадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '14', href: '/newGame/14', fieldName: 'Четырнадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
    ] as Array<PiecePassType>,
    allPass: [] as Array<allPassType>,
    myPlayerTeam: [] as Array<any>,
    myPlayerNamesTeam: [] as Array<any>,
    enemyPlayerTeam: [] as Array<any>,
    enemyPlayerNamesTeam: [] as Array<any>,
    throws: [] as Array<any>,
    history: [] as Array<any>,
    gamePassCount: 0 as number,
    numberCurrentPlayer: '' as string,
    passCurrentInfo: '' as string,
    selectPlayer: 0,
    selectFieldPart: 0,
    selectAction: '',
    actionCounter: 0,
    squadActive: false,


    deleteAction: '',
    deletePlayerNumber: 0,
    deleteSector: 0,

    isMyTeam: true as boolean | undefined
}

export type InitialStateType = typeof initialState

const gameStatistic = (state = initialState, action: any): InitialStateType => {
     
    switch (action.type) {
        case CREATE_STATISTIC_FOR_MY_TEAM:
            let count = 0
            let objectArray = action.myTeamArr.map((el: any, index: any) => {
                return {
                    id: count++,
                    number: el.playerNumber,
                    // first_name: action.teamNames[index],
                    full_name: action.teamNames[index],
                    team: 1
                }
            })
            return {
                ...state,
                myPlayerTeam: objectArray
            }
        case CREATE_STATISTIC_FOR_ENEMY_TEAM:
            let enemyCount = 0
            let objectEnemyArray = action.enemyTeamArr.map((el: any, index: any) => {
                return {
                    id: enemyCount++,
                    number: el.playerNumber,
                    full_name: action.teamNames[index],
                    // last_name: action.teamNames[index],
                    team: 2
                }
            })
            return {
                ...state,
                enemyPlayerTeam: objectEnemyArray
            }
        case SET_CHOSEN_PLAYER:
            return {
                ...state,
                selectPlayer: action.playerID
            }
        case SET_FIELD_PART:
            return {
                ...state,
                selectFieldPart: action.fieldPart
            }
        case SET_GAME_ACTION:
            return {
                ...state,
                selectAction: action.gameAction,
                actionCounter: state.actionCounter + 1
            }
        case ADD_THROWS:
            let newObj = {
                id: state.actionCounter,
                sector: +state.selectFieldPart,
                player: +state.selectPlayer,
                throw: state.selectAction
            }
            return {
                ...state,
                throws: [...state.throws, newObj]
            }
        case CREATE_STATISTIC:
            let statisticObj = {
                id: state.actionCounter,
                sector: +state.selectFieldPart,
                playerNumber: +state.selectPlayer,
                action: state.selectAction,
                name: action.playerName,
                team: action.playerTeam
            }
            return {
                ...state,
                history: [statisticObj ,...state.history]
            }
        case REMOVE_HISTORY_ELEMENT:
             
            let buffArr = state.history
            for (let i = 0; i < state.history.length; i++) {
                if (state.history[i].sector === +action.sector && state.history[i].playerNumber === +action.playerNumber && state.history[i].action === action.action)
                    buffArr.splice(i, 1)
            }
            return {
                ...state,
                history: state.history,
                deleteAction: action.action,
                deletePlayerNumber: action.playerNumberm,
                deleteSector: action.sector
            }
        case CLEAR_HISTORY:
            let historyBuffArr = state.history
            historyBuffArr.splice(0, historyBuffArr.length)
            return {
                ...state,
                history: state.history
            }
        case CLEAR_FIELD_PIECE:
            for(let i=0; i < state.piecePass.length; i++) {
                state.piecePass[i].unResultPass =0
                state.piecePass[i].resultPass =0
                state.piecePass[i].pass =0
            }
            return {
                ...state,
                piecePass: state.piecePass
            }
        case CLEAR_THROWS:
            let throwsBuffArr = state.throws
            throwsBuffArr.splice(0, throwsBuffArr.length)
            return {
                ...state,
                throws: state.throws
            }
        case ADD_ACTION_TO_FIELD_PIECE:
            for (let i = 0; i < state.piecePass.length; i++) {
                if (+state.selectFieldPart === +state.piecePass[i].id ) {
                    if(state.selectAction){
                        state.piecePass[i].resultPass++
                        state.piecePass[i].pass++
                    }
                    else {
                        state.piecePass[i].unResultPass++
                        state.piecePass[i].pass++
                    }
                }
            }
            return {
                ...state,
                piecePass: state.piecePass
            }
        case SET_SQUARD_ACTIVE:
             
            console.log('action.active')
            console.log(action.active)
            return {
                ...state,
                squadActive: action.active
            }
        case CHOOSE_TEAM1:
            for(let i =0; i< state.myPlayerTeam.length; i++) {
                if(state.myPlayerTeam[i].number === +state.selectPlayer){
                    state.isMyTeam = true
                }
            }
            for(let i =0; i< state.enemyPlayerTeam.length; i++) {
                if(state.enemyPlayerTeam[i].number === +state.selectPlayer){
                    state.isMyTeam = false
                }
            }
            return {
                ...state,
                isMyTeam: state.isMyTeam
            }
        default :
            return state;
    }
}

export const createStatisticForMyTeam = (myTeamArr: any, teamNames: any) => ({
    type: CREATE_STATISTIC_FOR_MY_TEAM, myTeamArr: myTeamArr, teamNames: teamNames
})
export const createStatisticForEnemyTeam = (enemyTeamArr: any, teamNames: any) => ({
    type: CREATE_STATISTIC_FOR_ENEMY_TEAM, enemyTeamArr: enemyTeamArr, teamNames: teamNames
})
export const setChosenPlayer = (playerID: number) => ({
    type: SET_CHOSEN_PLAYER, playerID: playerID
})
export const setFieldPart = (fieldPart: number) => ({
    type: SET_FIELD_PART, fieldPart: fieldPart
})
export const setGameAction = (gameAction: boolean) => ({
    type: SET_GAME_ACTION, gameAction: gameAction
})
export const addThrows = () => ({
    type: ADD_THROWS
})
export const createStatistic = (playerName: string, playerTeam: string) => ({
    type: CREATE_STATISTIC, playerName: playerName, playerTeam: playerTeam
})
export const removeHistoryElement = (playerNumber: number, action: boolean, sector: number) => ({
    type: REMOVE_HISTORY_ELEMENT, playerNumber: playerNumber, action: action, sector: sector
})
export const clearHistory = () => ({type: CLEAR_HISTORY})
export const clearFieldPiece = () => ({type: CLEAR_FIELD_PIECE})
export const clearThrows = () => ({type: CLEAR_THROWS})
export const addActionToFieldPiece = () => ({type: ADD_ACTION_TO_FIELD_PIECE})
export const setSquardActive = (active: boolean) => ({type: SET_SQUARD_ACTIVE, active: active })
export const chooseTeam1 = () => ({type: CHOOSE_TEAM1})



export default gameStatistic;