const ADD_HISTORY = 'ADD-HISTORY';
const UPDATE_HISTORY_FIELD = 'UPDATE-HISTORY-FIELD';

let initialState = {
    fieldName: '',
    playerNumber: '',
    passName: '',
    windowName: 'История игры',
    resultName: 'Результативная',
    unResultName: 'Нерезультативная',
    history: [] as any
}

export type InitialStateType = typeof initialState

const gameHistoryReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_HISTORY:
             
            let newHistory = {
                id: 3,
                pass: state.passName,
                text: state.fieldName,
                playerNumber: state.playerNumber,
            }
            return {
                ...state,
                history: [...state.history, newHistory] as [],
            }

        case
        UPDATE_HISTORY_FIELD:
             
            return {
                ...state,
                fieldName: action.text,
                playerNumber: action.playerNumber,
                passName: action.passInfo
            };

        default :
            return state;
    }
}

type AddHistoryActionType = {
    type: typeof ADD_HISTORY;
}
type updateHistoryActionType ={
    type: typeof UPDATE_HISTORY_FIELD,
    text: string,
    playerNumber: string,
    passInfo: string,
}

export const showPass = (): AddHistoryActionType => ({type: ADD_HISTORY})
export const updateHistory = (info: string, playerInfo: string, action: string): updateHistoryActionType =>
    ({type: UPDATE_HISTORY_FIELD, text: info, playerNumber: playerInfo, passInfo: action})

export default gameHistoryReducer;