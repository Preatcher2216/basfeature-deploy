import React, {memo, useEffect, useState} from "react";
import Classes from './TeamMembers.module.css'
import Katya from './../../../Images/minimize/Katya.png'
import Daniil from './../../../Images/minimize/Daniil.png'
import Ruvim from './../../../Images/minimize/Ruvim.png'
import Egor from './../../../Images/minimize/Egor.png'
import Yura from './../../../Images/minimize/Yura.png'
import Ivan from './../../../Images/minimize/Ivan.png'
import Kirill from './../../../Images/minimize/Kirill.png'
import NikitaKaptian from './../../../Images/minimize/Kaptian.png'
import Nikita from './../../../Images/minimize/Nikita.png'
import LoadableImg from "../../Loadable-Img/Loadable-Img";
import LeftMessagePiece from '../../../Images/LeftPartMessage.svg'
import RightMiddleMessagePiece from '../../../Images/VectorRightMiddle.svg'
import PopupPlayersChoose from "../../Modal/Players-Choose/Popup-Players-Choose";
import {useDispatch, useSelector} from "react-redux";
import {getSelectTeamMembers, getTeamMembers} from "../../NewMainPage/Main-Preson-Selectors";
import TeamMembersElement from "./Team-Members-Element/Team-Members-Element";
import {setTeamMember} from "../../../Redux/Redusers/Game-Window/about-us-reducer";


const TeamMembers = ({}) => {

    const [isTeamMembers, setIsTeamMembers] = useState(false)
    const personTeamInfo = useSelector(getTeamMembers);
    const personInfo = useSelector(getSelectTeamMembers)
    const dispatch = useDispatch()

    const showInfo = (e: any) => {
         
        setIsTeamMembers(true)
        dispatch(setTeamMember(
            e.currentTarget.parentElement.parentElement.parentElement.children[0].innerText))
        console.log(
            e.currentTarget.parentElement.parentElement.parentElement.children[0].innerText)
    }

    const showInfoRight = (e:any) => {
        setIsTeamMembers(true)
        dispatch(setTeamMember(
            e.currentTarget.parentElement.parentElement.parentElement.children[1].innerText))
        console.log(
            e.currentTarget.parentElement.parentElement.parentElement.children[1].innerText)
    }
    let teammatesInfo


    try {
        teammatesInfo = personInfo.map((el: any) => {
            return (
                <TeamMembersElement name={el.name} vk={el.vk} email={el.email}  setIsTeamMembers={setIsTeamMembers}/>
            )
        })
    } 
    catch (e) {
        
    }


    return (
        <div className={Classes.TeamMembers}>
            <div className={Classes.Wrapper}>
                <div className={Classes.LeftSide}>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Katya}/>
                            <div className={Classes.PersonName}>Шепенева Екатерина</div>
                        </div>
                        <div className={Classes.MessageBlock}>
                            <div className={Classes.MessageBox}>
                                <span className={Classes.MessageText}>Всем привет! Я занималась разработкой дизайна и макетов для нашего проекта.</span>
                                <button onClick={showInfo} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessage}>
                                <img src={LeftMessagePiece} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Daniil}/>
                            <div className={Classes.PersonName}>Даниил Шестопалов</div>
                        </div>
                        <div className={Classes.MessageBlock}>
                            <div className={Classes.MessageBox}>
                                <span className={Classes.MessageText}>Хай, я iOS разработчик.</span>
                                <button onClick={showInfo} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessage}>
                                <img src={LeftMessagePiece} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Ruvim}/>
                            <div className={Classes.PersonName}>Рувим Бурлаков</div>
                        </div>
                        <div className={Classes.MessageBlock}>
                            <div className={Classes.MessageBox}>
                                <span
                                    className={Classes.MessageText}>Привет, я второй разработчик приложения на iOS.</span>
                                <button onClick={showInfo} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessage}>
                                <img src={LeftMessagePiece} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={NikitaKaptian}/>
                            <div className={Classes.PersonName}>Сафронов Никита</div>
                        </div>
                        <div className={Classes.MessageBlock}>
                            <div className={Classes.MessageBox}>
                                <span
                                    className={Classes.MessageText}>Приветствую тебя, я капитан команды BasFeature.</span>
                                <button onClick={showInfo} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessage}>
                                <img src={LeftMessagePiece} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Ivan}/>
                            <div className={Classes.PersonName}>Вешкин Иван</div>
                        </div>
                        <div className={Classes.MessageBlock}>
                            <div className={Classes.MessageBox}>
                                <span className={Classes.MessageText}>Привет, я frontend разработчик.</span>
                                <button onClick={showInfo} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessage}>
                                <img src={LeftMessagePiece} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Classes.RightSide}>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.MessageBlock}>
                            <div className={`${Classes.MessageBox} ${Classes.Right}`}>
                                <span className={Classes.MessageText}>Здравствуйте, я люблю пиццу!</span>
                                <button onClick={showInfoRight} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessageMiddle}>
                                <img src={RightMiddleMessagePiece} alt=""/>
                            </div>
                        </div>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Egor}/>
                            <div className={Classes.PersonName}>Егор Скубко</div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.MessageBlock}>
                            <div className={`${Classes.MessageBox} ${Classes.Right}`}>
                                <span className={Classes.MessageText}>Привет. Я технический писатель.</span>
                                <button onClick={showInfoRight} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessageMiddle}>
                                <img src={RightMiddleMessagePiece} alt=""/>
                            </div>
                        </div>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Nikita}/>
                            <div className={Classes.PersonName}>Никита Кучеренко</div>
                        </div>

                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.MessageBlock}>
                            <div className={`${Classes.MessageBox} ${Classes.Right}`}>
                                <span className={Classes.MessageText}>Здравствуй. Я backend разработчик.</span>
                                <button onClick={showInfoRight} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessageMiddle}>
                                <img src={RightMiddleMessagePiece} alt=""/>
                            </div>
                        </div>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Yura}/>
                            <div className={Classes.PersonName}>Макаров Юра</div>
                        </div>
                    </div>
                    <div className={Classes.PersonBlock}>
                        <div className={Classes.MessageBlock}>
                            <div className={`${Classes.MessageBox} ${Classes.Right}`}>
                                <span className={Classes.MessageText}>Доброго дня. Я второй Android разработчик.</span>
                                <button onClick={showInfoRight} className={Classes.MessageBtn}>Контакты</button>
                            </div>
                            <div className={Classes.PieceMessageMiddle}>
                                <img src={RightMiddleMessagePiece} alt=""/>
                            </div>
                        </div>
                        <div className={Classes.ImgBlock}>
                            <LoadableImg src={Kirill}/>
                            <div className={Classes.PersonName}>Лопырин Кирилл</div>
                        </div>
                    </div>
                </div>
            </div>

            <PopupPlayersChoose active={isTeamMembers} setActive={setIsTeamMembers}>
                <div className={Classes.MyInfo}>
                    {teammatesInfo}
                </div>
            </PopupPlayersChoose>
        </div>
    )

}


export default memo(TeamMembers);