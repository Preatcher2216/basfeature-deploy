const CLICK_ON_FIELD = 'CLICK_ON_FIELD';
const CLICK_ON_PLAYER = 'CLICK_ON_PLAYER';
const PASS_COUNT = 'PASS_COUNT';
const PLAYER_PASS_COUNT = 'PLAYER_PASS_COUNT';

export type InitialStateType = typeof initialState;

type allPassType = {
    id: number
    passCount: number
    team: string
}
export type PiecePassType = {
    id: string
    href: string
    fieldName: string
    resultPass: number
    unResultPass: number
    pass: number
}
export type ActualTeamType = {
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

const initialState = {
    allPass: [
        {id: 1, passCount: 1, team: 'TeamName'},
    ] as Array<allPassType>,
    piecePass: [
        {
            id: '1', href: '/game/1', fieldName: 'Первый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '2', href: '/game/2', fieldName: 'Второй сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '3', href: '/game/3', fieldName: 'Третий сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '4', href: '/game/4', fieldName: 'Четвертый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '5', href: '/game/5', fieldName: 'Пятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '6', href: '/game/6', fieldName: 'Шестой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '7', href: '/game/7', fieldName: 'Седьмой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '8', href: '/game/8', fieldName: 'Восьмой сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '9', href: '/game/9', fieldName: 'Девятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '10', href: '/game/10', fieldName: 'Десятый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '11', href: '/game/11', fieldName: 'Одиннадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '12', href: '/game/12', fieldName: 'Двенадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '13', href: '/game/13', fieldName: 'Тринадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
        {
            id: '14', href: '/game/14', fieldName: 'Четырнадцатый сектор', resultPass: 0, unResultPass: 0, pass: 0,
        },
    ] as Array<PiecePassType>,
    actualTeam: [
        {
            id: 1,
            position: 1,
            number: '01',
            role: 'Капитан',
            rating: 5,
            resultPass: 0,
            unResultPass: 0,
            pass: 0,
            isActive: true,
        },
        {
            id: 2,
            position: 2,
            number: '02',
            role: 'Капитан',
            rating: 5,
            resultPass: 0,
            unResultPass: 0,
            pass: 0,
            isActive: true,
        },
        {
            id: 3,
            position: 3,
            number: '03',
            role: 'Капитан',
            rating: 5,
            resultPass: 0,
            unResultPass: 0,
            pass: 0,
            isActive: true,
        },
        {
            id: 4,
            position: 4,
            number: '04',
            role: 'Капитан',
            rating: 5,
            resultPass: 0,
            unResultPass: 0,
            pass: 0,
            isActive: true,
        },
        {
            id: 5,
            position: 5,
            number: '05',
            role: 'Капитан',
            rating: 5,
            resultPass: 0,
            unResultPass: 0,
            pass: 0,
            isActive: true,
        },
    ] as Array<ActualTeamType>,

    fieldCurrentName: '' as string,
    gamePassCount: 0 as number,
    numberCurrentPlayer: '' as string,
    passCurrentInfo: '' as string,
    activePlayer: [] as Array<any>,
};


const passManagerReducer = (state = initialState, action: any) => {
    const count = 0;
    switch (action.type) {
        case CLICK_ON_FIELD:
            let buffField;
            for (let i = 0; i < state.piecePass.length; i++) {
                if (action.clickedArea === state.piecePass[i].href) {
                    buffField = state.piecePass[i].fieldName;
                    break;
                }
            }
            return {
                ...state,
                fieldCurrentName: buffField,
            };

        case CLICK_ON_PLAYER:
            let buffPlayer;
            let buffPlayerCopy;
            let iCount;
            for (let i = 0; i < state.actualTeam.length; i++) {
                if (action.clickedPlayer === state.actualTeam[i].number) {
                    buffPlayer = state.actualTeam[i].number;
                    buffPlayerCopy = state.actualTeam[i];
                    iCount = i;
                    break;
                }
            }
            return {
                ...state,
                numberCurrentPlayer: buffPlayer,
            };

        case PASS_COUNT:
             ;
            let buffCount;
            let buffPieceCount;
            for (let i = 0; i < state.piecePass.length; i++) {
                if (action.clickedArea === state.piecePass[i].fieldName) {
                    buffCount = state.piecePass[i].pass + 1;
                    state.piecePass[i].pass = buffCount;
                    if (action.piecePass) {
                        buffPieceCount = state.piecePass[i].resultPass + 1;
                        state.piecePass[i].resultPass = buffPieceCount;
                    } else {
                        buffPieceCount = state.piecePass[i].unResultPass + 1;
                        state.piecePass[i].unResultPass = buffPieceCount;
                    }
                    break;
                }
            }
             ;

            return {
                ...state,
                gamePassCount: action.allPass,
                piecePass: state.piecePass,
                actualTeam: state.actualTeam,
            };
        case PLAYER_PASS_COUNT:
            let playerPass;
             ;
            for (let i = 0; i < state.actualTeam.length; i++) {
                if (action.playerNumber === state.actualTeam[i].number) {
                    playerPass = state.actualTeam[i].pass + 1;
                    state.actualTeam[i].pass = playerPass;
                }
            }
            return {
                ...state,
                actualTeam: state.actualTeam,
            };

        default:
            return state;
    }
};

type ClickLoggerActionType = {
    type: typeof CLICK_ON_FIELD
    clickedArea: string
}
type PlayerFinderActionType = {
    type: typeof CLICK_ON_PLAYER
    clickedPlayer: string,
}
type PassCounterActionType = {
    type: typeof PASS_COUNT
    clickedArea: string
    allPass: number
    piecePass: string
}
type PlayerPassCounterActionType = {
    type: typeof PLAYER_PASS_COUNT
    playerNumber: string
}

export const clickLogger = (partFieldName: string): ClickLoggerActionType => ({
    type: CLICK_ON_FIELD, clickedArea: partFieldName,
});
export const playerFinder = (playerInfo: any): PlayerFinderActionType => ({
    type: CLICK_ON_PLAYER, clickedPlayer: playerInfo,
});
export const passCounter = (partFieldName: string, pass: any, resultOfPass: any): PassCounterActionType => {
     ;
    return {
        type: PASS_COUNT, clickedArea: partFieldName, allPass: pass, piecePass: resultOfPass,
    };
};
export const playerPassCounter = (playerInfo: any): PlayerPassCounterActionType => ({
    type: PLAYER_PASS_COUNT, playerNumber: playerInfo,
});

export default passManagerReducer;
