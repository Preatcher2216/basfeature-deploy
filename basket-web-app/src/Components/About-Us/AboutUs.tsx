import React, {memo} from "react";
import Navigation from "../NewField/Navigation/Navigation";
import Footer from "../NewField/Footer/Footer";
import TeamMembers from "./TeamMembers/TeamMembers";
import HeaderDescription from "./HederDescription/HeaderDescription";
import MobileNavigation from "../NewField/Mobile-Navigation/Mobile-Navigation";
import MobileFooter from "../NewField/Mobile-Footer/Mobile-Footer";

const AboutUs = ({}) => {
    return (
        <>
            <Navigation/>
            <MobileNavigation/>
            <HeaderDescription/>
            <TeamMembers/>
            <Footer/>
            <MobileFooter/>
        </>
    )
}

export default memo(AboutUs)