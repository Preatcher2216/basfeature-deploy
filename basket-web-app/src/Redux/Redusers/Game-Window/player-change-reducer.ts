const REPLACE_PLAYERS = 'REPLACE_PLAYERS';

export type PlayerForChangeType = {
    id: number
    position: number
    number: string
    role: string
    rating: number
    resultPass: number
    unResultPass: number
    pass: number
    isActive: boolean
}

let initialState = {
    playerName: 'Игрок',
    windowName: 'Сменные игроки',
    playerForChange: [
        {id: 6, position: 6, number: '06', role: 'Капитан', rating: 5, resultPass: 0, unResultPass: 0, pass: 0, isActive: false},
        {id: 7, position: 7, number: '07', role: 'Капитан', rating: 5, resultPass: 0, unResultPass: 0, pass: 0, isActive: false},
        {id: 8, position: 8, number: '08', role: 'Капитан', rating: 5, resultPass: 0, unResultPass: 0, pass: 0, isActive: false},
        {id: 9, position: 9, number: '09', role: 'Капитан', rating: 5, resultPass: 0, unResultPass: 0, pass: 0, isActive: false},
        {id: 10, position: 10, number: '105', role: 'Капитан', rating: 5, resultPass: 0, unResultPass: 0, pass: 0, isActive: false}
    ] as Array<PlayerForChangeType>
}
type InitialStateType = typeof initialState

const playerChangeReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        default :
            return state;
    }
}

type ReplacePlayersActionType = {
    type: typeof REPLACE_PLAYERS
    disablePlayer: any
    activePlayer: any
    activeTeam: any
}

export const replacePlayersAC = (disablePlayer: string,activePlayer: string, activePlayerTeam: string): ReplacePlayersActionType => {
    return {
        type: REPLACE_PLAYERS, disablePlayer: disablePlayer, activePlayer: activePlayer, activeTeam: activePlayerTeam
    }
}

export default playerChangeReducer;