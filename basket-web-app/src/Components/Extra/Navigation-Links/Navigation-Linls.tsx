import React from "react";
import Classes from "../../NewField/Navigation/Navigation.module.css";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getFirstName, getLastName} from "../../NewMainPage/Main-Preson-Selectors";
import {exitActiveSession} from "../../../Redux/Redusers/Authorization/authorization-reducer";

type NavigationLinksType = {
    isMobile?: boolean
    closeMobileMenu?: () => void
}

const NavigationLinks: React.FC<NavigationLinksType> = ({isMobile, closeMobileMenu}) => {

    const authorization = useSelector(getAuthorization)
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)

    const dispatch = useDispatch()

    const exitSession = () => {
        dispatch(exitActiveSession())
    }


    return (
        <div className='NavigationButtons'>

            {authorization
                ? <Button className={`${Classes.HeaderNavButton} ${Classes.ButtonsShift}`} type="primary" shape="round">{firstName} {lastName}</Button>
                : (<Button className={`${Classes.HeaderNavButton}`} type="primary" shape="round"><NavLink to='/login'>Войдите
                    в аккаунт</NavLink></Button>)
            }
            {/*@ts-ignore*/}
            <Button className={`${Classes.HeaderNavButton} ${Classes.ButtonsShift}`} type="primary" shape="round" onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/'>Главная</NavLink>
            </Button>
            {/*@ts-ignore*/}
            <Button className={`${Classes.HeaderNavButton} ${Classes.ButtonsShift} DisableMobile`} type="primary" shape="round" onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/newGame'>Матч</NavLink>
            </Button>
            {/*@ts-ignore*/}
            <Button className={`${Classes.HeaderNavButton} ${Classes.ButtonsShift}`} type="primary" shape="round" onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/about_us'>О проекте</NavLink>
            </Button>
            {/*@ts-ignore*/}
            <Button className={`${Classes.HeaderNavButton} ${Classes.ButtonsShift}`} type="primary" shape="round" onClick={() => isMobile && closeMobileMenu()}>
                <NavLink to='/statistics'>Статистика</NavLink>
            </Button>

            {
                authorization
                    ? <Button className={Classes.HeaderNavButton} type="primary" shape="round"
                              onClick={exitSession}>Выход</Button>
                    : null
            }
        </div>
    )
}

export default NavigationLinks