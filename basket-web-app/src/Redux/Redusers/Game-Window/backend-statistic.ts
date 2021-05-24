import {addGame, getListOfGames, oneGameStatistic} from "../../../API/API";

const SET_LIST_OF_GAMES = 'SET_LIST_OF_GAMES'
const SET_URL_RESPONSE = 'SET_URL_RESPONSE'
const SET_EMAIL = 'SET_EMAIL'
const FIND_GAME = 'FIND_GAME'
const SET_ONE_GAME = 'SET_ONE_GAME'

const initialState = {
    listOfGame: [] as Array<any>,
    urlResponse: [] as Array<any>,
    email: '',
    chosenTeamID: '',
    oneGame: '',
    childRef: ''
}
type InitialStateType = typeof initialState

const backendStatistics = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_LIST_OF_GAMES:
            return {
                ...state,
                listOfGame: action.payload
            }

        case SET_URL_RESPONSE:
             
            return {
                ...state,
                urlResponse: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.email
            }
        case FIND_GAME:
            for (let i = 0; i < state.listOfGame.length; i++) {
                if (action.team1 === state.listOfGame[i].team1 && action.team2 === state.listOfGame[i].team2 && action.date === state.listOfGame[i].date) {
                    state.chosenTeamID = state.listOfGame[i].id
                }

            }
            return {
                ...state,
                chosenTeamID: state.chosenTeamID
            }
        case SET_ONE_GAME:
            return {
                ...state,
                oneGame: action.payload
            }
        default :
            return state;
    }
}

export const setListOfGames = (data: any) => ({type: SET_LIST_OF_GAMES, payload: data})
export const setUrlResponse = (data: any) => ({type: SET_URL_RESPONSE, payload: data})
export const setEmail = (email: string) => ({type: SET_EMAIL, email: email})
export const findGame = (team1: string, team2: string, date: string) => ({
    type: FIND_GAME,
    team1: team1,
    team2: team2,
    date: date
})
export const setOneGame = (date: any) => ({type: SET_ONE_GAME, payload: date})
export const setRef = () => {}

export const getListOfGamesThunk = (apiKey: string) => {
    return (dispatch: any) => {
        const date = getListOfGames(apiKey)
        date.then(result => {
            console.log(result.data.data.games)
            dispatch(setListOfGames(result.data.data.games))
        })
    }
}
export const addGameThunk = (team1: string, team2: string, players1: any, throws: any, email: string, apiKey: string,) => {
     
    return (dispatch: any) => {
        const date = addGame(team1, team2, players1, throws, email, apiKey)
        dispatch(setUrlResponse(date))
    }
}
export const getStatisticsOfOneGameThunk = (apiKey: string, id: number) => {
    return (dispatch: any) => {
        const date = oneGameStatistic(apiKey, id)
        try {
            date.then(result => {
                console.log(result.data.data.game.sheet)
                dispatch(setOneGame(result.data.data.game.sheet))
            })
        } catch (e) {
        }
    }
}
export default backendStatistics;


