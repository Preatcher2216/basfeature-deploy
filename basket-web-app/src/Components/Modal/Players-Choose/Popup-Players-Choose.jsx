import React, {useCallback, useEffect, useRef} from 'react';
import Classes from './Popup-Players-Choose.module.css'
import {useDispatch} from "react-redux";
import {clearSelectTeamMember} from "../../../Redux/Redusers/Game-Window/about-us-reducer";

const PopupPlayersChoose = (props) => {

    const modalRef = useRef();
    const dispatch = useDispatch()

    /* Проверка на нажатие 'Esc' */
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && props.active) {
            props.setActive(false)
            dispatch(clearSelectTeamMember())
        }
    }, [props.setActive, props.active])

    let closeWindow = useCallback(() => {
        props.setActive(false);
        dispatch(clearSelectTeamMember())
    },[])

    /* Скрытие окон*/
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    })
    return(
        <div className={props.active ?  Classes.modal + " " + Classes.active : Classes.modal} onClick={ closeWindow} ref={modalRef}>

            <div className={props.active ?  Classes.modalContent + " " + Classes.active : Classes.modalContent} onClick={e => e.stopPropagation()}>
                {/*<span className={Classes.closeIcon} onClick={closeWindow}>x</span>*/}
                {props.children}
            </div>
        </div>
    );
}

export default PopupPlayersChoose;