import {setLoginUser, setRegistrationUser} from "../../../API/API"

const PERSON_AUTHORISED = "PERSON_AUTHORISED"
const PERSON_INFO = "PERSON_INFO"
const CHANGE_PERSON_NAME = "CHANGE_PERSON_NAME"
const CHANGE_PERSON_LAST_NAME = "CHANGE_PERSON_LAST_NAME"
const CHANGE_PERSON_MIDDLE_NAME = "CHANGE_PERSON_MIDDLE_NAME"
const CHANGE_PERSON_USER_NAME = "CHANGE_PERSON_USER_NAME"
const CHANGE_PERSON_USER_PASSWORD = "CHANGE_PERSON_USER_PASSWORD"
const EXIT_SESSION = "EXIT_SESSION"

type InitialStateType = typeof initialState

let initialState = {
    authorization: false,
    fetching: false,
    firstName: "",
    lastName: "",
    middleName: "",
    apiKey: "",
    loginName: "",

}

const authorizationReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case PERSON_AUTHORISED:
            return {
                ...state,
                authorization: action.isLogin
            }
        case PERSON_INFO:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                middleName: action.middleName,
                apiKey: action.apiKey,
                loginName: action.loginName,
            }
        case CHANGE_PERSON_NAME:
            return {
                ...state,
                firstName: action.updateFirstName,
            }
        case CHANGE_PERSON_LAST_NAME:
            return {
                ...state,
                lastName: action.updateLastName
            }
        case CHANGE_PERSON_MIDDLE_NAME:
            return {
                ...state,
                middleName: action.updateMiddleName
            }
        case CHANGE_PERSON_USER_NAME:
            return {
                ...state,
                loginName: action.loginName
            }
        case EXIT_SESSION:
            return {
                ...state,
                apiKey: '',
                authorization: false
            }
        default :
            return state;
    }
}
type PersonLoginActionType = {
    type: typeof PERSON_AUTHORISED
    isLogin: boolean
}
type PersonInfoActionType = {
    type: typeof PERSON_INFO
    firstName: string
    lastName: string
    middleName: string
    apiKey: string
    loginName: string
}
type ChangeNameActionType = {
    type: typeof CHANGE_PERSON_NAME
    updateFirstName: string
}
type ChangeLastNameActionType = {
    type: typeof CHANGE_PERSON_LAST_NAME
    updateLastName: string
}
type ChangeMiddleNameActionType = {
    type: typeof CHANGE_PERSON_MIDDLE_NAME,
    updateMiddleName: string
}
type ChangeUserNameActionType = {
    type: typeof CHANGE_PERSON_USER_NAME,
    loginName: string
}

export const personLogin = (login: boolean): PersonLoginActionType => ({type: PERSON_AUTHORISED, isLogin: login})
export const personInfo = (firstName: string, lastName: string, middleName: string, apiKey: string, loginName: string): PersonInfoActionType =>
    ({
        type: PERSON_INFO,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        apiKey: apiKey,
        loginName: loginName
    })
export const changeName = (updateFirstName: string): ChangeNameActionType => ({
    type: CHANGE_PERSON_NAME,
    updateFirstName: updateFirstName
})
export const changeLastName = (updateLastName: string): ChangeLastNameActionType => ({
    type: CHANGE_PERSON_LAST_NAME,
    updateLastName: updateLastName
})
export const changeMiddleName = (updateMiddleName: string): ChangeMiddleNameActionType => ({
    type: CHANGE_PERSON_MIDDLE_NAME,
    updateMiddleName: updateMiddleName
})
export const changeUserName = (updateUserName: string): ChangeUserNameActionType => ({
    type: CHANGE_PERSON_USER_NAME,
    loginName: updateUserName
})
export const exitActiveSession = () => ({type: EXIT_SESSION})

export const loginThunkCreator = (userLogin: any, password: any, setFetching: any, personInfo: any, routeChange: any, errAuth: any) => {
    return (dispatch: any) => {
         

        setLoginUser(userLogin, password, setFetching, personInfo).then((data: any) => {
                dispatch(personLogin(true));
                routeChange(true);
                console.log(data)
            }
        ).catch((err:any) => {
            alert('Произощла ошибка :( Попробуйте ещё раз.')
            dispatch(personLogin(false));
            setFetching(false)
            errAuth()
            // setFetching(false);
        })
    }
}

export const registrationThunkCreator = (firstName: string, lastName: string, middleName: string, loginName: string, passwordName: string) => {
    return (dispatch: any) => {
        debugger
        setRegistrationUser(firstName, lastName, middleName, loginName, passwordName).then(data => {
            console.log(data)
        }).catch((err:any) => {
            alert('Произощла ошибка :( Попробуйте ещё раз.')
        })
    }
}


export default authorizationReducer;