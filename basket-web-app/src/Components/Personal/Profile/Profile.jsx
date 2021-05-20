import React from "react"
import {Form, Field} from "react-final-form"
import {
    ChangeUserFirstName,
    ChangeUserLastName,
    ChangeUserMiddleName,
    ChangeUserName,
    ChangeUserPassword, UserDelete
} from "../../../API/API";

let Profile = (props) => {
    let changeFirstNameSubmit = (e) => {
        debugger
        console.log(e);
        ChangeUserFirstName(props.username, e.updateFirstName, props.lastName, props.middleName, props.apiKey, props.changeName).then(() => {
            }
        )
    }
    let changeLastNameSubmit = (e) => {
        debugger
        console.log(e);
        ChangeUserLastName(props.username, props.firstName, e.updateLastName, props.middleName, props.apiKey, props.changeLastName).then(() => {
            }
        )
    }
    let changeMiddleNameSubmit = (e) => {
        debugger
        console.log(e);
        ChangeUserMiddleName(props.username, props.firstName, props.lastName, e.updateMiddleName, props.apiKey, props.changeMiddleName).then(() => {
            }
        )
    }
    let changeUserNameSubmit = (e) => {
        debugger
        console.log(e);
        ChangeUserName(props.username, e.userNameChange, props.apiKey, props.changeUserName).then(() => {
            }
        )
    }
    let userPasswordSubmit = (e) => {
        ChangeUserPassword(props.username, e.confirmPassword, e.userPasswordChange, props.apiKey).then(() => {

        })
    }
    let userDeleteSubmit = (e) => {
        UserDelete(props.username, e.passForDeleteUser, props.apiKey).then(() => {
            // history.push("path");
        })
    }
    let validate = () => {
        debugger
    }
    return (
        <div>
            <div>
                <h1>Профиль</h1>
            </div>

            <div>

                <Form
                    onSubmit={changeFirstNameSubmit}
                    validate={validate}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label>Изменить имя</label>
                                <Field name="updateFirstName" component="input" placeholder="Новое имя"/>

                                <button onClick={() => {
                                }} type="submit">
                                    Изменить
                                </button>
                            </div>


                        </form>
                    )}
                />

                <Form
                    onSubmit={changeLastNameSubmit}
                    validate={validate}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>
                            <div>

                                <label>Изменить фамилию</label>
                                <Field name="updateLastName" component="input" placeholder="Новая фамилия"/>

                                <button onClick={() => {
                                }} type="submit">
                                    Изменить
                                </button>

                            </div>


                        </form>
                    )}
                />

                <Form
                    onSubmit={changeMiddleNameSubmit}
                    validate={validate}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label>Изменить отчество</label>
                                <Field name="updateMiddleName" component="input" placeholder="Новое отчество"/>

                                <button onClick={() => {
                                }} type="submit">
                                    Изменить
                                </button>
                            </div>


                        </form>
                    )}
                />
                <br/>
                <Form
                    onSubmit={changeUserNameSubmit}
                    validate={validate}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Изменить логин</label>
                                <Field name="userNameChange" component="input" placeholder="Новый логин"/>

                                <button type="submit">
                                    Изменить
                                </button>
                            </div>


                        </form>
                    )}
                />
                <br/>
                <Form
                    onSubmit={userPasswordSubmit}
                    validate={validate}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Изменить пароль</label>
                                <Field name="userPasswordChange" component="input" placeholder="Новый пароль"/>
                                <Field name="confirmPassword" component="input" placeholder="Старый пароль"/>

                                <button type="submit">
                                    Изменить
                                </button>
                            </div>


                        </form>
                    )}
                />
                <br/>
                <Form
                    onSubmit={userDeleteSubmit}
                    validate={validate}
                    render={(handleSubmit) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Удалить пользователя</label>
                                <Field name="passForDeleteUser" component="input" placeholder="Введите пароль"/>
                                <button type="submit">
                                    Удалить
                                </button>
                            </div>


                        </form>
                    )}
                />

            </div>

        </div>
    );
}

export default Profile