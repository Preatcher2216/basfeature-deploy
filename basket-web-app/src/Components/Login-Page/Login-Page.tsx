import React, {useState, useEffect, FormEvent, useRef} from 'react';
import styled from 'styled-components'
import {Form, Field} from 'react-final-form'
import {setLoginUser, setRegistrationUser} from "../../API/API";
import {Link, Redirect, Route, useHistory} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {current} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {getAuthorization} from "../NewMainPage/Main-Preson-Selectors";
import './Login-Page.css'
import PopupPlayersChoose from "../Modal/Players-Choose/Popup-Players-Choose";
import Classes from "../About-Us/TeamMembers/Team-Members-Element/Team-Members-Element.module.css";

const fetchingStyle = {
    position: "absolute",
    left: "50%",
    right: "50%"
}
const inputStyle = {
    height: "56px",
    width: "100%",
    fontSize: "24px",
    border: "2px solid #eceef2",
    borderRadius: "8px",
    backgroundColor: "#fff",
    color: "black",
    outline: "none",
    // marginBottom: "5px"

};
const logoStyle = {
    width: "140px",
    height: "140px",
    border: "none",
    borderRadius: "50%"
}
const MainPageStyle = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: relative;
`
const MainPageFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  //align-items: center;
  justify-content: center;
  background-color: #282c34;
`
const MediaRequest = styled.div`
  //  Медиа запросы страницы
`
const BaseAuthWindow = styled.div`
  width: 90%;
  //height: 499px;
  flex: 1 0 auto;
  flex-direction: column;
  margin: 20% auto;
`
const AuthorizationWindow = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  transition: height .2s ease-in;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #fff;
`
const AuthorizationContent = styled.div`
  margin-top: 0;
  overflow: hidden;
  box-sizing: border-box;
  padding: 32px;
`
const Header = styled.div`
  padding: 0 0 16px;
`
const HeaderLogo = styled.div`
  position: relative;
  text-align: center;
`
const HeaderLogoLink = styled.a`
  width: 86px;
  height: 35px;
  background-image: url(https://rostovdon.russiabasket.ru/Files/ProjectsCustomImages/dd3qkvgx.png);
`
const Body = styled.div`
  width: 100%;
`
const AuthScreen = styled.div`
  position: relative;
  transform: translateZ(0);
  width: 100%;
`
const AuthTitle = styled.h1`
  font-family: YS Text, Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin: 0;
  color: #000;
`
const LoginForm = styled.div`
  margin-top: 40px;
`
const InputArea = styled.div`
  position: relative;
  margin-bottom: 24px;
`
const LabelWrapper = styled.div`
  position: relative;
  margin-bottom: 0;
`
const InputLoginWrapper = styled.div`

`
const ForgotLogin = styled.a`
  margin-top: 10px;
  text-decoration: none;
  outline: 0;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #04b;
`
const LogInButtonWrapper = styled.div`
  margin: 16px 0 0;
`
const LogInButton = styled.button`
  background-color: #fc0;
  border-radius: 8px;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  width: 100%;
  border: none;
  outline: none;
`
const RegistrationButton = styled.button`
  border: 2px solid #eceef2;
  border-radius: 8px;
  background-color: #fff;
  color: black;
  margin-top: 24px;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  width: 100%;
  outline: none;
`
type PropsType = {
    loginThunkCreator: any
    personInfo: any
}

const LoginPage: React.FC<PropsType> = ({loginThunkCreator, personInfo}) => {

    const [isTrouble, setIsTrouble] = useState(false)
    const [login, setLogin] = useState(true);
    const [continueLogin, setContinueLogin] = useState(false);
    const [registration, setRegistration] = useState(false);
    // const [button, setButton] = useState(1);
    const [confirmReg, setConfirmReg] = useState(false);
    const [userLogin, setUserLogin] = useState("");
    const [userPass, setUserPass] = useState("");
    const [time, setTime] = useState(0);
    const [fetching, setFetching] = useState(false);

    const isAuth = useSelector(getAuthorization)

    const clickRegistration = () => {
        setRegistration(false)
    }

    const refElem = useRef<any>(null)
    // console.log(refElem)

    const state = {
        button: 1,
    };
    type OnSubmitType = {
        login: string
    }
    // Для нажатия кнопки на начаьном экране, один для двух кнопок "Логин" и "Регистрация"
    const onSubmit = (e: OnSubmitType) => {

        // e.preventDefault();
        if (state.button === 1) {
            setLogin(false);
            setContinueLogin(true);
            setRegistration(false);
            setUserLogin(e.login)

        }
        if (state.button === 2) {
            setLogin(false);
            setRegistration(true);
            setContinueLogin(false);
        }
    };
    const history = useHistory();

    const routeChange = () => {
        const path = "/";
        history.push(path);
    }
    const errAuth = () => {
        const path = "/login";
        history.push(path);
    }
    // Отправка на сервер логина и пароля для аторизации
    type LoginSubmitType = {
        login: string
        password: string
    }
    const LoginSubmit = (e: LoginSubmitType) => {
        loginThunkCreator(userLogin, e.password, setFetching, personInfo, routeChange, errAuth);
    }
    /* const history = useHistory(createHistory)({
         basename: '/basename'
     });*/
    // Отправка на сервер данным зарегистрированного пользователя
    type RegistrationSubmitType = {
        firstName: string
        lastName: string
        loginName: string
        middleName: string
        passwordName: string
        passwordNameRepeat: string
    }
    const RegistrationSubmit = (e: RegistrationSubmitType) => {
        setRegistrationUser(e.firstName, e.lastName, e.middleName, e.loginName, e.passwordName).then(data => {

        })
    }
    type ErrorsType = {
        login: string
    }
    // Валидация ввода
    const validate = (e: LoginSubmitType) => {
        // console.log(e);
        if (!registration) {
            return
        } else {
            const errors: {} | any = {};
            if (e.login && e.login.length < 5)
                errors.login = "Too short";
            return errors;
        }
    };
    // Валидация ввода начальной страницы логинизации
    const validateLogin = (values: LoginSubmitType) => {

        if (!registration) {
            return
        } else {
            const errors: any = {}
            if (!values.login) {
                errors.login = 'Required'
            } else if (values.login.length < 5) {
                errors.login = "Too short"
            }
            return errors
        }
    };
    const WrappedLink: any = () => {
        return (
            <LogInButton onClick={() => (state.button = 1)}>
                <Link to="" style={linkStyles}/>
            </LogInButton>
        )
    }
    const linkStyles: React.CSSProperties = {
        textDecoration: "none"
    }

    const styles: React.CSSProperties = {
        position: "absolute",
        left: "50%",
        right: "50%"
    }
    // @ts-ignore
    return (
        // {isAuth ? <Redirect to='/'/> : null}

        <MainPageStyle>
            <MainPageFlexWrapper>
                <LoginWrapper>
                    <MediaRequest>
                        <BaseAuthWindow>

                            {
                                fetching ? (
                                        <div style={styles}><ClipLoader color="#FFFFFF" loading={fetching} size={150}/>
                                        </div>)
                                    :
                                    (<AuthorizationWindow ref={refElem}>
                                        <AuthorizationContent>

                                            <Header>
                                                <HeaderLogo>
                                                    <img
                                                        src="https://rostovdon.russiabasket.ru/Files/ProjectsCustomImages/dd3qkvgx.png"
                                                        alt="Баскетбольная команда ЮФУ"
                                                        style={logoStyle}
                                                    />
                                                    <HeaderLogoLink/>
                                                </HeaderLogo>
                                            </Header>


                                            {
                                                login ? (<Body>
                                                    <AuthScreen>
                                                        <AuthTitle>
                                                            <span>Войдите, чтобы продолжить</span>
                                                        </AuthTitle>
                                                        <LoginForm>
                                                            <Form
                                                                onSubmit={onSubmit}
                                                                validate={validateLogin}
                                                                render={({
                                                                             handleSubmit,
                                                                             form,
                                                                             submitting,
                                                                             pristine,
                                                                             values
                                                                         }) => (
                                                                    <form onSubmit={handleSubmit}>
                                                                        {console.log(handleSubmit)}
                                                                        <InputArea>
                                                                            <LabelWrapper>
                                                                                {/*<label>Введите логин</label>*/}
                                                                            </LabelWrapper>
                                                                            <InputLoginWrapper>
                                                                                <Field name="login">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="text"
                                                                                                   placeholder="Введите логин"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                            </InputLoginWrapper>
                                                                            <ForgotLogin onClick={() => setIsTrouble(true)}>Не помню логин или пароль</ForgotLogin>
                                                                            <LogInButtonWrapper>
                                                                                <LogInButton
                                                                                    onClick={() => (state.button = 1)}>Войти</LogInButton>
                                                                                <RegistrationButton
                                                                                    onClick={() => (state.button = 2)}>Регистрация</RegistrationButton>
                                                                            </LogInButtonWrapper>
                                                                        </InputArea>
                                                                    </form>
                                                                )}/>
                                                        </LoginForm>
                                                    </AuthScreen>
                                                </Body>) : continueLogin ? (<Body>
                                                    <AuthScreen>
                                                        <AuthTitle>
                                                            <span>Войдите, чтобы продолжить</span>
                                                        </AuthTitle>
                                                        <LoginForm>
                                                            <Form
                                                                onSubmit={LoginSubmit}
                                                                validate={validate}
                                                                render={({handleSubmit}) => (
                                                                    <form onSubmit={handleSubmit}>
                                                                        <InputArea>
                                                                            <LabelWrapper>
                                                                                {/*<label>Введите логин</label>*/}
                                                                            </LabelWrapper>
                                                                            <InputLoginWrapper>
                                                                                <Field name="password" component="input"
                                                                                       type="password"
                                                                                       placeholder="Введите пароль"
                                                                                       style={inputStyle}/>
                                                                            </InputLoginWrapper>
                                                                            <ForgotLogin>Не помню логин</ForgotLogin>
                                                                            <LogInButtonWrapper>
                                                                                {/*<Link to="/personal">*/}
                                                                                <LogInButton
                                                                                    onClick={() => (state.button = 1)}>Войти</LogInButton>
                                                                                {/*<WrappedLink>Войти</WrappedLink>*/}
                                                                                <RegistrationButton
                                                                                    onClick={() => (state.button = 2)}>Регистрация</RegistrationButton>
                                                                            </LogInButtonWrapper>
                                                                        </InputArea>
                                                                    </form>
                                                                )}/>
                                                        </LoginForm>
                                                    </AuthScreen>
                                                </Body>) : registration ? (<Body>
                                                    <AuthScreen>
                                                        <AuthTitle>
                                                            <span>Регистрация</span>
                                                        </AuthTitle>
                                                        <LoginForm>
                                                            <Form
                                                                onSubmit={RegistrationSubmit}
                                                                validate={(values: any) => {
                                                                    const errors: any = {}
                                                                    if (!values.firstName) {
                                                                        errors.firstName = 'Required'
                                                                    }
                                                                    if (!values.lastName) {
                                                                        errors.lastName = 'Required'
                                                                    }
                                                                    if (!values.middleName) {
                                                                        errors.middleName = 'Required'
                                                                    }
                                                                    if (!values.loginName) {
                                                                        errors.loginName = 'Required'
                                                                    }
                                                                    if (!values.passwordName) {
                                                                        errors.passwordName = 'Required'
                                                                    }
                                                                    if (!values.passwordNameRepeat) {
                                                                        errors.passwordNameRepeat = 'Required'
                                                                    } else if (values.passwordName !== values.passwordNameRepeat) {
                                                                        errors.passwordName = 'Must be equal'
                                                                    }

                                                                    return errors
                                                                }}
                                                                render={({handleSubmit}) => (
                                                                    <form onSubmit={handleSubmit}>
                                                                        <InputArea>
                                                                            <InputLoginWrapper>
                                                                                <Field name="firstName">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="text"
                                                                                                   placeholder="Имя"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                                <Field name="lastName">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="text"
                                                                                                   placeholder="Фамилия"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                                <Field name="middleName">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="text"
                                                                                                   placeholder="Отчество"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                                <Field name="loginName">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="text"
                                                                                                   placeholder="Логин"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                                <Field name="passwordName">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="password"
                                                                                                   placeholder="Пароль"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>
                                                                                <Field name="passwordNameRepeat">
                                                                                    {({input, meta}) => (
                                                                                        <div>
                                                                                            <input {...input}
                                                                                                   type="password"
                                                                                                   placeholder="Подтверждение"
                                                                                                   style={inputStyle}/>
                                                                                            {meta.error && meta.touched &&
                                                                                            <span>{meta.error}</span>}
                                                                                        </div>
                                                                                    )}
                                                                                </Field>

                                                                            </InputLoginWrapper>
                                                                            <LogInButtonWrapper>
                                                                                <LogInButton
                                                                                    onClick={clickRegistration}>
                                                                                    Зарегистрироваться
                                                                                </LogInButton>
                                                                            </LogInButtonWrapper>
                                                                        </InputArea>
                                                                    </form>
                                                                )}/>
                                                        </LoginForm>
                                                    </AuthScreen>
                                                </Body>) : <AuthScreen>
                                                    <AuthTitle>
                                                        <span>Войдите, чтобы продолжить</span>
                                                    </AuthTitle>
                                                    <LoginForm>
                                                        <Form
                                                            onSubmit={onSubmit}
                                                            validate={validateLogin}
                                                            render={({
                                                                         handleSubmit,
                                                                         form,
                                                                         submitting,
                                                                         pristine,
                                                                         values
                                                                     }) => (
                                                                <form onSubmit={handleSubmit}>
                                                                    {console.log(handleSubmit)}
                                                                    <InputArea>
                                                                        <LabelWrapper>
                                                                            {/*<label>Введите логин</label>*/}
                                                                        </LabelWrapper>
                                                                        <InputLoginWrapper>
                                                                            <Field name="login">
                                                                                {({input, meta}) => (
                                                                                    <div>
                                                                                        <input {...input} type="text"
                                                                                               placeholder="Введите логин"
                                                                                               style={inputStyle}/>
                                                                                        {meta.error && meta.touched &&
                                                                                        <span>{meta.error}</span>}
                                                                                    </div>
                                                                                )}
                                                                            </Field>
                                                                        </InputLoginWrapper>
                                                                        <ForgotLogin>Не помню логин</ForgotLogin>
                                                                        <LogInButtonWrapper>
                                                                            <LogInButton
                                                                                onClick={() => (state.button = 1)}>Войти</LogInButton>
                                                                            <RegistrationButton
                                                                                onClick={() => (state.button = 2)}>Регистрация</RegistrationButton>
                                                                        </LogInButtonWrapper>
                                                                    </InputArea>
                                                                </form>
                                                            )}/>
                                                    </LoginForm>
                                                </AuthScreen>
                                            }


                                        </AuthorizationContent>
                                    </AuthorizationWindow>)
                            }


                        </BaseAuthWindow>
                    </MediaRequest>
                </LoginWrapper>
            </MainPageFlexWrapper>

            <PopupPlayersChoose active={isTrouble} setActive={setIsTrouble}>
                <span className='ForgetPass'>Свяжитесь с нами для уточнения информации. Телефон для связи - +7 905-459-21-58</span>
                <button className={`${Classes.CloseBtn} White`} onClick={() => setIsTrouble(false)}>Закрыть</button>

            </PopupPlayersChoose>
        </MainPageStyle>

    );
};

export default LoginPage;