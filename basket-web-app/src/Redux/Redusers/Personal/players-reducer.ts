const ADD_PLAYER = 'ADD-PLAYER';
const ADD_PLAYER_INFO = 'ADD-PLAYER-INFO';


let initialState = {

    playerNameData: [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Максим'},
        {id: 3, name: 'Лука'},
        {id: 4, name: 'Константин'},
        {id: 5, name: 'Демид'}
    ],
    playerInfoData: [
        {position: 1, number: '01', role: 'Капитан', rating: 5},
        {position: 2, number: '02', role: 'Капитан', rating: 5},
        {position: 3, number: '03', role: 'Капитан', rating: 5},
        {position: 4, number: '04', role: 'Капитан', rating: 5},
        {position: 5, number: '05', role: 'Капитан', rating: 5}
    ],
    playersAddInput:[] as [],

}
const InitialStateType = typeof initialState;

const playersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }


    return state;
}

export default playersReducer;