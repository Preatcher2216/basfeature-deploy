import React, {useState} from "react";
import './../../Extra/Mobile-Footer.css'
import UpArrow from './../../../Images/icons/up-chevron.svg'
import DownArrow from './../../../Images/icons/down-chevron.svg'
import FooterText from "../../Extra/Footer-Text/Footer-Text";
import AboutProjectFooter from "../../Extra/Footer-Text/About-Project-Footer-Text";
import ExtraInformation from "../../Extra/Footer-Text/Extra-information";

const MobileFooter = () => {

    const [isOpen, setIseOpen] = useState(false)
    const [isExtra, setIsExtra] = useState(false)

    const openFooterInfo = () => setIseOpen(!isOpen)
    const openExtraInfo = () => setIsExtra((!isExtra))

    const upArrow = <img className='Arrow' src={UpArrow} alt="" onClick={openFooterInfo}/>
    const downArrow = <img className='Arrow' src={DownArrow} alt="" onClick={openFooterInfo}/>
    const upArrowSecond = <img className='ArrowSecond' src={UpArrow} alt="" onClick={openExtraInfo}/>
    const downArrowSecond = <img className='ArrowSecond' src={DownArrow} alt="" onClick={openExtraInfo}/>

    return (
        <footer className='MobileFooter'>
            <div className='TextBlock'>
                {isOpen ? upArrow : downArrow}
                <span className="PersonPageFooterTextTitle">Проект</span>
            </div>
            {isOpen && <AboutProjectFooter/>}

            <div className='TextBlock'>
                {isExtra ? upArrowSecond : downArrowSecond}
                <span className="PersonPageFooterTextEnd">Дополнительная информация</span>
            </div>
            {isExtra && <ExtraInformation/>}


            <div className="ProjectStatic">
                <span className="PersonPageFooterTextCenter">Связь с нами</span>
                <span className="PersonPageFooterText">BasFeature</span>
                <span className="PersonPageFooterText">+7 905-459-21-58</span>
            </div>
        </footer>
    )
}

export default MobileFooter