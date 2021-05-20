import React, {useRef, useState} from 'react';
import {Button, Layout} from 'antd';
import './MainPersonPage.css'
import SfeduLogo from './../../Images/Sfedu_logo.png'
import LeftArrow from './../../Images/Left_Arrow.svg'
import RightArrow from './../../Images/Right_Arrow.svg'
import {NavLink, useLocation, Link} from 'react-router-dom';
import {
    changeInputElement,
    changeTeamTitle,
    chooseTeamBtnClick,
    descriptionInput,
    submitInputElement,
    createInputElement, setDefaultInputArr
} from '../../Redux/Redusers/Game-Window/add-team-form-reducer';
import TeamsCard from "./Teams-Card/Teams-Card";
import {useDispatch, useSelector} from "react-redux";
import {
    getAddedTeams,
    getAuthorization,
    getFirstName,
    getInputFormArr,
    getIsMyTeam,
    getLastName,
}
    from "./Main-Preson-Selectors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullListPlayers from "./Popup-Window/Full-List-Players";

import Classes from "../NewField/Navigation/Navigation.module.css";
import NavigationLinks from "../Extra/Navigation-Links/Navigation-Linls";
import Navigation from "../NewField/Navigation/Navigation";
import MobileNavigation from "../NewField/Mobile-Navigation/Mobile-Navigation";
import FooterText from "../Extra/Footer-Text/Footer-Text";
import MobileFooter from "../NewField/Mobile-Footer/Mobile-Footer";
import DesktopFooter from "../NewField/Footer/Footer";
import MyTeamIcon from './../../Images/icons/king.svg'
import EnemyTeamIcon from './../../Images/icons/wizard.svg'

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                backgroundImage: `url(${RightArrow})`,
                backgroundRepeat: "no-repeat",
                content: "none",
                width: "100px",
                height: "100px"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                backgroundImage: `url(${LeftArrow})`,
                backgroundRepeat: "no-repeat",
                content: "none",
                width: "100px",
                height: "100px"
            }}
            onClick={onClick}
        />
    );
}

type PropsType = {}

export const MainPersonPage: React.FC<PropsType> = () => {

    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    const authorization = useSelector(getAuthorization)
    const isMyTeam = useSelector(getIsMyTeam)
    const inputFormArr = useSelector(getInputFormArr)
    const addedTeams = useSelector(getAddedTeams)

    const dispatch = useDispatch()

    const [teamCount, setTeamCount] = useState(0)
    const [crutch, setCrutch] = useState(0)

    const titleRef = useRef(null)
    const myTeamButtonRef = useRef(null)
    const enemyTeamButtonRef = useRef(null)
    const descriptionRef = useRef(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const clickOnMyTeamSpan = (e: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(chooseTeamBtnClick(e.currentTarget.innerText))
    }
    const clickOnEnemyTeamSpan = (e: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(chooseTeamBtnClick(e.currentTarget.innerText))
    }
    const addInputs = (e: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(createInputElement())
    }
    const submitInputs = (e: React.MouseEvent<HTMLButtonElement>): void => {

        setTeamCount((prevState) => prevState + 1)
        dispatch(submitInputElement(teamCount))
        setCrutch(1)
        clearAllForm(inputRef, inputFormArr, titleRef, descriptionRef)
    }
    const clearAllForm = (inputRef: any, inputArr: any, titleRef: any, descriptionRef: any) => {
        try {
            titleRef.current.value = ''
            descriptionRef.current.value = ''
            for (let i = 0; i < inputArr.length; i++) {
                inputRef.current.parentElement.children[i].value = ''
            }
            dispatch(setDefaultInputArr())
        } catch (e) {
            console.log(e)
        }

    }
    const onChangeInputValue = (e: any): void => {
        dispatch(changeInputElement(e.currentTarget.value, e.currentTarget.name))
    }
    const onBlurInput = (e: any) => {
    }
    const changeTitle = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(changeTeamTitle(e.currentTarget.value))
    }
    const changeDescription = (e: React.FormEvent<HTMLTextAreaElement>) => {
        dispatch(descriptionInput(e.currentTarget.value))
    }

    const inputFormArrMap = inputFormArr.map((inputFormArr: any) => {

        return (
            <input type={inputFormArr.type}
                   name={inputFormArr.name}
                   placeholder={inputFormArr.placeholder}
                   className={inputFormArr.className}
                   onChange={(e) => {
                       onChangeInputValue(e)
                   }}
                   onBlur={(event => {
                       onBlurInput(event)
                   })}
                   ref={inputRef}
            />
        )
    })
    console.log('inputRef')
    console.log(inputRef)
    const [listPlayers, setlistPlayers] = useState(false)
    const teamCard = addedTeams.map((elem: any) => {
        return (
            <TeamsCard teamTitle={elem.teamTitle} teamPlayers={elem.teamPlayers} teamNumbers={elem.teamNumbers}
                       isMyTeam={elem.isMyTeam} setlistPlayers={setlistPlayers}/>
        )
    })

    const myCard = teamCard.filter((el: any) => {
        return el.props.isMyTeam === true
    })
    const enemyCard = teamCard.filter((el: any) => {
        return el.props.isMyTeam === false
    })

    const settings = {
        dots: false,
        infinite: myCard.length > 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: myCard.length > 2,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    className: "center",
                }
            },

        ]
    };

    const mobileWidth = document.documentElement.clientWidth
    console.log(mobileWidth)

    const {Header, Content, Footer} = Layout;
    return (
        <Layout>
            <Header className='PersonPageHeader' style={{backgroundColor: '#493D4E', display: 'flex'}}>
               <>
               <Navigation/>
               <MobileNavigation/>
               </>
                <div className='HeaderDescription'
                     style={{display: 'flex', paddingBottom: '50px', alignItems: 'center', }}>
                    <div className='HeaderText'>
                        <span className='SubHeaderTextOne'>Здесь вы сможете</span>
                        <span className='SubHeaderTextTwo'>Создавать, редактировать, удалять команды</span>
                        <span className='SubHeaderTextThree'>Чтобы начать матч, перейдите на вклюдку "Матч"</span>
                    </div>
                    <div className='SfeduLogo'>
                        <img src={SfeduLogo} alt='Логотип ЮФУ' style={{height: '258px', width: '276px'}}/>
                    </div>
                </div>
            </Header>
            <Content className='PersonPageContent'>
                <span className='PersonPageCreateTeamText'>Создайте команду прямо сейчас!</span>
                <div className='PersonPageCreateTeamField'>
                    <div className='PersonPageFieldLeftSide'>
                        <input type="text"
                               name="teamName"
                               className='TitleTeamInput'
                               placeholder='Название'
                               ref={titleRef}
                               onBlur={(e: React.FormEvent<HTMLInputElement>) => changeTitle(e)}/>
                        <div className='ChooseTeam'>
                            <span className='ChooseTeamText'>Чья команда?</span>
                            <div className='ChooseTeamButtons'>
                                <Button ref={myTeamButtonRef} type="text"
                                        className={isMyTeam ? 'ChooseTeamButton' + ' ' + 'ButtonBorder' : 'ChooseTeamButton'}
                                        onClick={clickOnMyTeamSpan}>Моя</Button>
                                <Button ref={enemyTeamButtonRef} type="text"
                                        className={isMyTeam ? 'ChooseTeamButton' : 'ChooseTeamButton' + ' ' + 'ButtonBorder'}
                                        onClick={clickOnEnemyTeamSpan}>Соперников</Button>
                            </div>
                        </div>
                        <textarea
                            name="description"
                            className='CommentsForTeamTextArea'
                            placeholder='Напишите комментарий'
                            ref={descriptionRef}
                            onBlur={(e) => changeDescription(e)}/>
                    </div>
                    <div className='PersonPageFieldRightSide'>
                        <div className='ButtonWrapper'>
                            <div className='InputsConnection'>{inputFormArrMap}</div>
                            <div className='AddPlayerButtonFormBlock'>
                                <button className='AddPlayerButtonForm' onClick={addInputs}>+</button>
                            </div>
                            <div className='CreateTeamButtonFormBlock'>
                                <button className='CreateTeamButtonForm' onClick={submitInputs}>Создать</button>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="PersonPageMyTeamText">Ваши команды:</span>
                <div className="MyTeams">
                    <Slider {...settings} >
                        {myCard}
                    </Slider>
                </div>

                <span className='EnemyTeamText'>Команды соперника:</span>
                <div className="MyTeams">
                    <Slider {...settings} >
                        {enemyCard}
                    </Slider>
                </div>


                <FullListPlayers listPlayers={listPlayers} setlistPlayers={setlistPlayers} addedTeams={addedTeams}>
                    <h3>My popup</h3>
                </FullListPlayers>

            </Content>

            <Footer>
            <DesktopFooter/>
            <MobileFooter/>
            </Footer>
        </Layout>

    )
}
