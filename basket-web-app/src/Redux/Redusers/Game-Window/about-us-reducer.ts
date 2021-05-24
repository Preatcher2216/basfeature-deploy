const SET_TEAM_MEMBER = 'SET_TEAM_MEMBER'
const CLEAR_SELECT_TEAM_MEMBER = 'CLEAR_SELECT_TEAM_MEMBER'

type TeamMembersType = {
    name: string
    vk: string
    email: string
    phone: string
}

const initialState = {
   teamMembers: [
       {name: 'Шепенева Екатерина', vk: 'https://vk.com/id557520065', email: 'shepeneva@sfedu.ru'},
       {name: 'Даниил Шестопалов', vk: 'https://vk.com/i_danik', email: 'dansh@sfedu.ru'},
       {name: 'Рувим Бурлаков', vk: 'https://vk.com/ruvimb', email: 'rburlakov@sfedu.ru'},
       {name: 'Вешкин Иван', vk: 'https://vk.com/dfdvdff', email: 'iveshkin@sfedu.ru'},
       {name: 'Егор Скубко', vk: 'https://vk.com/egorskubko', email: 'skubko@sfedu.ru'},
       {name: 'Никита Кучеренко', vk: 'https://vk.com/kucchher', email: 'nkucherenko@sfedu.ru'},
       {name: 'Сафронов Никита', vk: 'https://vk.com/outlaw55', email: 'safronov@sfedu.ru'},
       {name: 'Макаров Юра', vk: 'https://vk.com/yumac', email: 'ymakarov@sfedu.ru'},
       {name: 'Лопырин Кирилл', vk: 'https://vk.com/id246590022', email: 'lopyrin@sfedu.ru'},
   ] as Array<TeamMembersType>,
    selectTeamMembers: [] as Array<any>
}
type InitialStateType = typeof initialState

const aboutUs = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_TEAM_MEMBER:
            let selectTeamMembersBuff
            for(let i =0; i< state.teamMembers.length; i++) {
                if(action.teamMemberName === state.teamMembers[i].name) {
                   state.selectTeamMembers.push(state.teamMembers[i])
                }
            }
            return {
                ...state,
                selectTeamMembers: state.selectTeamMembers
            }
        case CLEAR_SELECT_TEAM_MEMBER:
            const selectTeamMembersBuffArr = state.selectTeamMembers.splice(0,state.selectTeamMembers.length)
            return {
                ...state,
                selectTeamMembers: state.selectTeamMembers
            }
        default :
            return state;
    }
}

export const setTeamMember = (teamMemberName: string) => ({type: SET_TEAM_MEMBER, teamMemberName})
export const clearSelectTeamMember = () => ({type:CLEAR_SELECT_TEAM_MEMBER})

export default aboutUs;