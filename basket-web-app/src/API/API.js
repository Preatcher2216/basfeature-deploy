import * as axios from "axios"
// import {useDispatch} from "react-redux";

// const dispatch = useDispatch()

const header = {
    'Access-Control-Allow-Origin': 'http://127.0.0.1',
    'Access-Control-Request-Method': 'PUT',
    'Origin': 'http://127.0.0.1'
}

const instance = axios.create({
    baseURL: "https://46.17.104.151:5000/probasket/",
})

export const setRegistrationUser = async (firstName, lastName, middleName, userName, password) => {
    let response = await (instance
        .get(`/authorization?type=registration&first_name=${firstName}&last_name=${lastName}&middle_name=${middleName}&username=${userName}&pas=${password}`))
}
export const setLoginUser = async (userName, password, setFetching, personInfo) => {
    setFetching(true);
     
    let response = await (instance.get(`/authorization?type=login&username=${userName}&pas=${password}`))
    // response.catch()
     
    personInfo(response.data.user.first_name, response.data.user.last_name, response.data.user.middle_name, response.data.user.api_key, response.data.user.username)
    setFetching(false);
    console.log('response')
    console.log(response)
}
export const ChangeUserFirstName = async (username, updateName, lastName, middleName, apiKey, changeName) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
    let response = await (instance
        .get(`/authorization?type=edit_fio&api_key=${apiKey}&username=${username}&first_name=${updateName}&last_name=${lastName}&middle_name=${middleName}`))
    changeName(response.data.user.first_name)
}
export const ChangeUserLastName = async (username, firstName, updateLastName, middleName, apiKey, changeLastName) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
    let response = await (instance
        .get(`/authorization?type=edit_fio&api_key=${apiKey}&username=${username}&first_name=${firstName}&last_name=${updateLastName}&middle_name=${middleName}`))
    changeLastName(response.data.user.last_name)
}
export const ChangeUserMiddleName = async (username, firstName, lastName, updateMiddleName, apiKey, changeMiddleName) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
    let response = await (instance
        .get(`/authorization?type=edit_fio&api_key=${apiKey}&username=${username}&first_name=${firstName}&last_name=${lastName}&middle_name=${updateMiddleName}`))
    changeMiddleName(response.data.user.middle_name)
    console.log('Request complited')
}
export const ChangeUserName = async (username, newUsername, apiKey, changeUserName) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
    let response = await (instance
        .get(`/authorization?type=edit_username&api_key=${apiKey}&username=${username}&new_username=${newUsername}`, {
            headers: header
        }))
     
    changeUserName(response.data.user.username)
    console.log('Request complited')
}
export const ChangeUserPassword = async (username, password, newPassword, apiKey) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
     
    let response = await (instance
        .get(`/authorization?type=edit_pas&api_key=${apiKey}&username=${username}&pas=${password}&new_pas=${newPassword}`))
     
    console.log('Request complited')
    console.log(response)

}
export const UserDelete = async (username, password, apiKey) => {
    // test user api_key - 3a5e84d27c5611eba6d45254005560c2
    let response = await (instance
        .get(`authorization?type=delete_account&username=${username}&pas=${password}&api_key=${apiKey}`))
    console.log('Request complited')

}
export const addGame = async (team1, team2, players1, throws, email, apiKey) => {
    let response = await (instance.get(`games?type=add&api_key=${apiKey}&team1=${team1}&team2=${team2}&players=${players1}&throws=${throws}&email=${email}`))
    console.log('Success')
    return response
}
export const getListOfGames = async (apiKey) => {
    const response = await (instance.get(`games?type=list&api_key=${apiKey}`))
    return response
}
export const oneGameStatistic = async (apiKey, id) => {
    const response = await (instance.get(`games?type=select&api_key=${apiKey}&id=${id}`))
    return response
}


