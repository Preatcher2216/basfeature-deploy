// import './../../../Components/NewMainPage/MainPersonPage.css'

const CHANGE_TEAM_TITLE = 'CHANGE_TEAM_TITLE'
const CHOOSE_TEAM_BTN_CLICK = 'CHOOSE_TEAM_BTN_CLICK'
const DESCRIPTION_INPUT = 'DESCRIPTION_INPUT'
const CREATE_INPUT_ELEMENT = 'CREATE_INPUT_ELEMENT'
const CHANGE_INPUT_ELEMENT = 'CHANGE_INPUT_ELEMENT'
const SUBMIT_INPUT_ELEMENT = 'SUBMIT_INPUT_ELEMENT'
const REMOVE_TEAM_CARD = 'REMOVE_TEAM_CARD'
const SET_DEFAULT_INPUT_ARR = 'SET_DEFAULT_INPUT_ARR'


export type inputFormArr = {
    type: string
    name: string
    placeholder: string
    className: string
    value: string | undefined
}
export type AddedPlayers = {
    playerName: string
    playerNumber: string
}
export type AddedTeams = {
    teamTitle: string
}

let initialState = {
    inputNumberPlaceholder: 'N',
    inputNamePlaceholder: 'ФИО',
    inputNumberClassName: 'InputPlayerNumberForm',
    inputNameClassName: 'InputPlayerNameForm',
    inputType: 'text',
    teamTitle: '',
    teamDescription: '',
    isButtonTeamClicked: false,
    isMyTeam: true,
    teamsCount: 0,
    inputFormArr: [
        {
            type: 'number',
            name: 'inputPlayerNumberForm_1',
            placeholder: 'N',
            className: 'InputPlayerNumberForm',
            value: 0,
            isActive: false
        },
        {
            type: 'text',
            name: 'inputPlayerNameForm_1',
            placeholder: 'ФИО',
            className: 'InputPlayerNameForm',
            value: undefined
        },
        {
            type: 'number',
            name: 'inputPlayerNumberForm_2',
            placeholder: 'N',
            className: 'InputPlayerNumberForm',
            value: 0
        },
        {
            type: 'text',
            name: 'inputPlayerNameForm_2',
            placeholder: 'ФИО',
            className: 'InputPlayerNameForm',
            value: undefined
        },
        {
            type: 'number',
            name: 'inputPlayerNumberForm_3',
            placeholder: 'N',
            className: 'InputPlayerNumberForm',
            value: 0
        },
        {
            type: 'text',
            name: 'inputPlayerNameForm_3',
            placeholder: 'ФИО',
            className: 'InputPlayerNameForm',
            value: undefined
        },
        {
            type: 'number',
            name: 'inputPlayerNumberForm_4',
            placeholder: 'N',
            className: 'InputPlayerNumberForm',
            value: 0
        },
        {
            type: 'text',
            name: 'inputPlayerNameForm_4',
            placeholder: 'ФИО',
            className: 'InputPlayerNameForm',
            value: undefined
        },
        {
            type: 'number',
            name: 'inputPlayerNumberForm_5',
            placeholder: 'N',
            className: 'InputPlayerNumberForm',
            value: 0
        },
        {
            type: 'text',
            name: 'inputPlayerNameForm_5',
            placeholder: 'ФИО',
            className: 'InputPlayerNameForm',
            value: undefined
        },
    ] as Array<inputFormArr>,
    addedPlayers: [] as Array<any>,
    addedTeams: [] as Array<AddedTeams>,
}
type InitialStateType = typeof initialState

const addTeamForm = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case CREATE_INPUT_ELEMENT:
            let newInputNumber = {
                type: 'number',
                name: `${state.inputNumberClassName+ '_' + (Math.ceil(state.inputFormArr.length/2)+1)}`,
                placeholder: state.inputNumberPlaceholder,
                className: state.inputNumberClassName,
                value: 0
            }
             let newInputName = {
                 type: state.inputType,
                 name: `${state.inputNameClassName + '_' + (Math.ceil(state.inputFormArr.length / 2) + 1)}`,
                 placeholder: state.inputNamePlaceholder,
                 className: state.inputNameClassName,
                 value: undefined
            }
            return {
                ...state,
                inputFormArr: [...state.inputFormArr, newInputNumber, newInputName] as Array<inputFormArr>
            }
        case CHANGE_INPUT_ELEMENT:
            for(let i = 0; i < state.inputFormArr.length; i++) {
                if(action.inputName === state.inputFormArr[i].name) {
                    state.inputFormArr[i].value = action.inputValue
                    break
                }
            }
            return {
                ...state,
                inputFormArr: state.inputFormArr
            }
        case SUBMIT_INPUT_ELEMENT:
             ;
            let playerName
            let playerNumber
            type NewTeamType = {
                teamTitle: string
                teamNumbers: Array<any>
                teamPlayers: Array<any>
                isMyTeam: boolean
                isClicked: boolean
            }
            const newTeam: NewTeamType = {
                teamTitle: state.teamTitle,
                teamNumbers: [],
                teamPlayers: [],
                isMyTeam: state.isMyTeam,
                isClicked: false
            }

            state.teamsCount= action.teamsCount
            for(let i = 0; i< state.inputFormArr.length; i++) {
                // @ts-ignore
                if(Number.isInteger(+state.inputFormArr[i].value)){
                    // @ts-ignore
                    playerNumber = +state.inputFormArr[i].value
                        newTeam.teamNumbers.push(playerNumber)
                }
                else {
                    playerName = state.inputFormArr[i].value
                        newTeam.teamPlayers.push(playerName)
                }

            }
            return {
                ...state,
                addedTeams: [...state.addedTeams, newTeam],
                teamsCount: state.teamsCount
            }
        case CHANGE_TEAM_TITLE:
            state.teamTitle = action.teamTitle
            return {
                ...state,
                teamTitle: state.teamTitle
            }
        case CHOOSE_TEAM_BTN_CLICK:
            if (action.chosenTeam === 'Моя') {
                state.isMyTeam = true

            }
            else if (action.chosenTeam === 'Соперников') {
                state.isMyTeam = false

            }

            return {
                ...state,
                isMyTeam: state.isMyTeam,
            }
        case DESCRIPTION_INPUT:
            state.teamDescription = action.descriptionText
            return {
                ...state,
                teamDescription: state.teamDescription
            }
        case REMOVE_TEAM_CARD:
            let buff = state.addedTeams
            for(let i =0; i< state.addedTeams.length; i++) {
                if(action.selectTeamCard === state.addedTeams[i].teamTitle) {
                    buff.splice(i,1)
                }
            }
            return {
                ...state,
                addedTeams: buff
            }
        case SET_DEFAULT_INPUT_ARR:
            let buffInputFormArr = state.inputFormArr.splice(10)
            return {
                ...state,
                inputFormArr: state.inputFormArr
            }
        default :
            return state;
    }
}

type ChangeTeamTitle = {
    type: typeof CHANGE_TEAM_TITLE
    teamTitle: string
}
type ChooseTeamBtnClick = {
    type: typeof CHOOSE_TEAM_BTN_CLICK
    chosenTeam: string
}
type DescriptionInput = {
    type: typeof DESCRIPTION_INPUT
    descriptionText: string
}
type CreateInputElementType = {
    type: typeof CREATE_INPUT_ELEMENT
}
type SubmitInputElement = {
    type: typeof SUBMIT_INPUT_ELEMENT
    teamsCount: number
}
type ChangeInputElementType = {
    type: typeof CHANGE_INPUT_ELEMENT
    inputValue: string
    inputName: string
}
type RemoveTeamCardType = {
    type: typeof REMOVE_TEAM_CARD
    selectTeamCard: string
}
type SetDefaultInputArrType = {
    type: typeof SET_DEFAULT_INPUT_ARR
}
export const changeTeamTitle = (teamTitle: string): ChangeTeamTitle => ({type: CHANGE_TEAM_TITLE, teamTitle: teamTitle})
export const chooseTeamBtnClick = (chosenTeam: string): ChooseTeamBtnClick => ({type: CHOOSE_TEAM_BTN_CLICK, chosenTeam: chosenTeam})
export const descriptionInput = (descriptionText: string): DescriptionInput => ({type: DESCRIPTION_INPUT, descriptionText: descriptionText})
export const createInputElement = (): CreateInputElementType => ({type: CREATE_INPUT_ELEMENT})
export const changeInputElement = (inputValue: string, inputName: string): ChangeInputElementType => ({type: CHANGE_INPUT_ELEMENT, inputValue: inputValue, inputName: inputName})
export const submitInputElement = (teamsCount: number): SubmitInputElement => ({type: SUBMIT_INPUT_ELEMENT, teamsCount: teamsCount})
export const removeTeamCard = (selectTeamCard: string): RemoveTeamCardType => ({type: REMOVE_TEAM_CARD, selectTeamCard: selectTeamCard})
export const setDefaultInputArr = (): SetDefaultInputArrType => ({type: SET_DEFAULT_INPUT_ARR})

export default addTeamForm;