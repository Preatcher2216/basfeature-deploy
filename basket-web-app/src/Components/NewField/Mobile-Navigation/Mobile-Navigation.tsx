import React, {useState} from "react";
import Classes from './Mobile-Navigation.module.css'
import NavigationLinks from "../../Extra/Navigation-Links/Navigation-Linls";
import './../../Extra/Mobile-Navigation.css'
import HamburgerLogo from './../../../Images/icons/menu.svg'
import CloseMenu from './../../../Images/icons/cancel.svg'

const MobileNavigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openMobileMenu = () => {
        setIsOpen(!isOpen)
    }

    const hamburgerIcon = <img className='Hamburger' src={HamburgerLogo} alt="" onClick={openMobileMenu}/>
    const closeIcon = <img className='Hamburger' src={CloseMenu} alt="" onClick={openMobileMenu}/>

    const closeMobileMenu = () => setIsOpen(false)

    return(
        <nav className='MobileNavigation'>
            {isOpen ? closeIcon : hamburgerIcon}
            { isOpen && <NavigationLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default  MobileNavigation