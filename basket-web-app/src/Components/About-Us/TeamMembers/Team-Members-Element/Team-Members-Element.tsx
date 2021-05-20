import React from "react";
import Classes from "./Team-Members-Element.module.css"
import VkIcon from "./../../../../Images/icons/vk (1).png"
import EmailIcon from "./../../../../Images/icons/gmail.png"
import PhoneIcon from "./../../../../Images/icons/phone.png"
import {clearSelectTeamMember} from "../../../../Redux/Redusers/Game-Window/about-us-reducer";
import {useDispatch} from "react-redux";

type TeamMembersElement = {
    name: string
    vk: string
    email: string
    setIsTeamMembers: React.Dispatch<React.SetStateAction<boolean>>
}

const TeamMembersElement:React.FC<TeamMembersElement> = ({name,vk,email, setIsTeamMembers}) => {

    const dispatch = useDispatch()

    const closeWindow = () => {
        setIsTeamMembers(false)
        dispatch(clearSelectTeamMember())
    }

    return (
        <div className={Classes.PersonInfoWrapper}>
            <h2 className={Classes.Description}>{`Меня зовут ${name}, со мной можно сязаться через:`}</h2>
            <div className={Classes.ElementWrapper}>
                <img className={Classes.Icons} src={VkIcon} alt=""/>
                <div className={Classes.Vk}>{`  ${vk}`}</div>
            </div>
            <div className={Classes.ElementWrapper}>
                <img className={Classes.Icons} src={EmailIcon} alt=""/>
                <div className={Classes.Email}>{` ${email}`}</div>
            </div>
            <button className={Classes.CloseBtn} onClick={closeWindow}>Закрыть</button>
        </div>
    )
}
export default TeamMembersElement