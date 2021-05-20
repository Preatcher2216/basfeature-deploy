import personalReducer from "./Redusers/Personal/personal-reducer";
import gameReducer from "./Redusers/Game-Window/game-reducer";

let store = {
    _state: {

        personal: {

            teamPage: {},

            playerPage: {
                playerNameData: [
                    {id: 1, name: 'Иван'},
                    {id: 2, name: 'Максим'},
                    {id: 3, name: 'Лука'},
                    {id: 4, name: 'Константин'},
                    {id: 5, name: 'Демид'}
                ],
                playerInfoData: [
                    {position: 1, number: '01', role: 'Капитан', rating: 5},
                    {position: 2, number: '01', role: 'Капитан', rating: 5}
                ],

            },

            gamesPage: {},

            staticsPage: {}
        },

        game: {
            playerChange: {},
            field: {
                allPass: [
                    {id: 1, passCount: 1, team: "TeamName"}
                ],
                piecePass: [
                    {fieldName: 'First', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Second', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Third', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Fourth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Fifth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Sixth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Seventh', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Eighth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Ninth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Tenth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Eleventh', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Twelfth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Thirteenth', resultPass: 0, unresultPass: 0},
                    {fieldName: 'Fourteenth', resultPass: 0, unresultPass: 0},
                ]
            },
            gameHistory: {
                fieldName: '',
                history: [
                    {id: 1, fieldName: 'First', result: true, text: 'Результативная'},
                    {id: 2, fieldName: 'Fifth', result: false, text: 'Нерезультативная'},
                ]
            }
        }
    },
    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { // action - object{ type: 'ADD-HISTORY' }
        this._state.personal = personalReducer(this._state.personal, action);
        this._state.game = gameReducer(this._state.game, action);

        this._callSubscriber(this._state);
    },

}

window.store = store;

export default store