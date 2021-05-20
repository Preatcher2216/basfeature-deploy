const SET_MY_TEAM_VALUE = 'SET_MY_TEAM_VALUE'
const SET_ENEMY_TEAM_VALUE = 'SET_ENEMY_TEAM_VALUE'
const SET_MY_TEAM_PLAYERS = 'SET_MY_TEAM_PLAYERS'
const SET_ENEMY_TEAM_PLAYERS = 'SET_ENEMY_TEAM_PLAYERS'
const GAME_IS_START = 'GAME_IS_START'
const SET_TEAM_CARD_CHOOSE = 'SET_TEAM_CARD_CHOOSE'
const SET_CHOSEN_PLAYER = 'SET_CHOSEN_PLAYER'
const SET_INDEX_OF_CLICKED_PLAYER = 'SET_INDEX_OF_CLICKED_PLAYER'
const SET_INDEX_OF_CLICKED_ENEMY_PLAYER = 'SET_INDEX_OF_CLICKED_ENEMY_PLAYER'
const SET_ACTIVE_MY_PLAYERS_FOR_GAME = 'SET_ACTIVE_MY_PLAYERS_FOR_GAME'
const SET_ACTIVE_ENEMY_PLAYERS_FOR_GAME = 'SET_ACTIVE_ENEMY_PLAYERS_FOR_GAME'
const CLEAR_ACTIVE_MY_PLAYERS_FOR_GAME = 'CLEAR_ACTIVE_MY_PLAYERS_FOR_GAME'
const CLEAR_ACTIVE_ENEMY_PLAYERS_FOR_GAME = 'CLEAR_ACTIVE_ENEMY_PLAYERS_FOR_GAME'

let initialState = {
    selectMyTeam: [] as Array<any>,
    selectMyTeamTitle: null as any,
    selectEnemyTeam: [] as Array<any>,
    selectEnemyTeamTitle: null as any,
    gameIsStarted: false,
    gameIsFinish: false,
    arrayOfMyPlayers: [] as Array<any>,
    arrayOfEnemyPlayers: [] as Array<any>,
    chosenTeamCard: '',
    selectPlayer: 0,
    indexArrForGame: [] as any,
    indexArrEnemyForGame: [] as any,
    finalMyPlayersForGame: [] as any,
    finalEnemyPlayersForGame: [] as any
}

export type InitialStateType = typeof initialState

const chooseTeamReducer = (state = initialState, action: any): InitialStateType => {
     
    switch (action.type) {
        case SET_MY_TEAM_VALUE:
            return {
                ...state,
                selectMyTeam: action.myTeam,
                selectMyTeamTitle: action.myTeamTitle
            }
        case SET_ENEMY_TEAM_VALUE:
            return {
                ...state,
                selectEnemyTeam: action.enemyTeam,
                selectEnemyTeamTitle: action.enemyTeamTitle
            }
        case SET_MY_TEAM_PLAYERS:
            return {
                ...state,
                arrayOfMyPlayers: action.myTeamPlayersArr
            }
        case SET_ENEMY_TEAM_PLAYERS:
            return {
                ...state,
                arrayOfEnemyPlayers: action.enemyTeamPlayersArr
            }
        case GAME_IS_START:
            return {
                ...state,
                gameIsStarted: action.isStart
            }
        case SET_TEAM_CARD_CHOOSE:
            return {
                ...state,
                chosenTeamCard: action.selectTeamCard
            }
        case SET_INDEX_OF_CLICKED_PLAYER:
            if (state.indexArrForGame.includes(action.playerID)) {
                let indexID = state.indexArrForGame.indexOf(action.playerID)
                state.indexArrForGame.splice(indexID, 1)
            } else {
                state.indexArrForGame.push(action.playerID)
            }
            return {
                ...state,
                indexArrForGame: state.indexArrForGame
            }
        case SET_INDEX_OF_CLICKED_ENEMY_PLAYER:
            if (state.indexArrEnemyForGame.includes(action.playerID)) {
                let indexID = state.indexArrEnemyForGame.indexOf(action.playerID)
                state.indexArrEnemyForGame.splice(indexID, 1)
            } else {
                state.indexArrEnemyForGame.push(action.playerID)
            }
            return {
                ...state,
                indexArrEnemyForGame: state.indexArrEnemyForGame
            }
        case SET_ACTIVE_MY_PLAYERS_FOR_GAME:
             
            for (let i = 0; i < state.arrayOfMyPlayers.length; i++) {
                for (let j = 0; j < state.arrayOfMyPlayers.length; j++) {
                    if (state.arrayOfMyPlayers[i].props.id === state.indexArrForGame[j]) {
                        state.finalMyPlayersForGame.push(state.arrayOfMyPlayers[i])
                    }
                }
            }
            return {
                ...state,
                finalMyPlayersForGame: state.finalMyPlayersForGame.sort((a: number, b: number) => a - b)
            }
        case SET_ACTIVE_ENEMY_PLAYERS_FOR_GAME:
             
            for (let i = 0; i < state.arrayOfEnemyPlayers.length; i++) {
                for (let j = 0; j < state.arrayOfEnemyPlayers.length; j++) {
                    if (state.arrayOfEnemyPlayers[i].props.id === state.indexArrEnemyForGame[j]) {
                        state.finalEnemyPlayersForGame.push(state.arrayOfEnemyPlayers[i])
                    }
                }
            }
            return {
                ...state,
                finalEnemyPlayersForGame: state.finalEnemyPlayersForGame.sort((a: number, b: number) => a - b)
            }
        case CLEAR_ACTIVE_MY_PLAYERS_FOR_GAME:
            let finalMyPlayersForGameBuffArr = state.finalMyPlayersForGame
            let indexArrForGameBuffArr = state.indexArrForGame
            finalMyPlayersForGameBuffArr.splice(0, state.finalMyPlayersForGame.length)
            indexArrForGameBuffArr.splice(0, state.indexArrForGame.length)
            return {
                ...state,
                finalMyPlayersForGame: state.finalMyPlayersForGame,
                indexArrForGame: state.indexArrForGame
            }
        case CLEAR_ACTIVE_ENEMY_PLAYERS_FOR_GAME:
            let finalEnemyPlayersForGameBuffArr = state.finalEnemyPlayersForGame
            let indexArrEnemyForGameBuffArr = state.indexArrEnemyForGame
            finalEnemyPlayersForGameBuffArr.splice(0, state.finalEnemyPlayersForGame.length)
            indexArrEnemyForGameBuffArr.splice(0, state.indexArrEnemyForGame.length)
            return {
                ...state,
                finalEnemyPlayersForGame: state.finalEnemyPlayersForGame,
                indexArrEnemyForGame: state.indexArrEnemyForGame
            }
        default :
            return state;
    }
}

type SetMyTeamValueType = {
    type: typeof SET_MY_TEAM_VALUE
    myTeam: Array<any>
}
type SetEnemyTeamValueType = {
    type: typeof SET_ENEMY_TEAM_VALUE
    enemyTeam: Array<any>
}

export const setMyTeamValue = (selectMyTeam: any, selectMyTeamTitle: any) => ({
    type: SET_MY_TEAM_VALUE, myTeam: selectMyTeam, myTeamTitle: selectMyTeamTitle
})
export const setEnemyTeamValue = (selectEnemyTeam: any, selectEnemyTeamTitle: any) => ({
    type: SET_ENEMY_TEAM_VALUE, enemyTeam: selectEnemyTeam, enemyTeamTitle: selectEnemyTeamTitle
})
export const setMyTeamPlayers = (myTeamPlayersArr: any) => ({
    type: SET_MY_TEAM_PLAYERS, myTeamPlayersArr: myTeamPlayersArr
})
export const setEnemyTeamPlayers = (enemyTeamPlayersArr: any) => ({
    type: SET_ENEMY_TEAM_PLAYERS, enemyTeamPlayersArr: enemyTeamPlayersArr
})
export const gameIsStart = (gameIsStart: boolean) => ({
    type: GAME_IS_START, isStart: gameIsStart
})
export const setTeamCardChoose = (selectTeamCard: string) => ({
    type: SET_TEAM_CARD_CHOOSE, selectTeamCard: selectTeamCard
})
export const setActivePlayer = (playerID: number, isSelect: boolean) => ({
    type: SET_CHOSEN_PLAYER, playerID: playerID, isSelect: isSelect
})
export const setIndexOfClickedPlayer = (playerID: number) => ({type: SET_INDEX_OF_CLICKED_PLAYER, playerID: playerID})
export const setIndexOfClickedEnemyPlayer = (playerID: number) => ({type: SET_INDEX_OF_CLICKED_ENEMY_PLAYER, playerID: playerID})
export const setActiveMyPlayersForGame = () => ({type: SET_ACTIVE_MY_PLAYERS_FOR_GAME})
export const setActiveEnemyPlayersForGame = () => ({type: SET_ACTIVE_ENEMY_PLAYERS_FOR_GAME})
export const clearActiveMyPlayersForGame = () => ({type: CLEAR_ACTIVE_MY_PLAYERS_FOR_GAME})
export const clearActiveEnemyPlayersForGame = () => ({type: CLEAR_ACTIVE_ENEMY_PLAYERS_FOR_GAME})


export default chooseTeamReducer;