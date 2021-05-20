import React from "react";
import Navigation from "../NewField/Navigation/Navigation";
import Description from "./Description/Description";
import StatisticsBody from "./Statistics-Body/Statistics-Body";
import Footer from "../NewField/Footer/Footer";
import MobileNavigation from "../NewField/Mobile-Navigation/Mobile-Navigation";
import MobileFooter from "../NewField/Mobile-Footer/Mobile-Footer";

const Statistics = ({}) => {

    return(
        <>
        <Navigation/>
        <MobileNavigation/>
        <Description/>
        <StatisticsBody/>
        <Footer/>
        <MobileFooter/>

        </>
    )
}

export default Statistics