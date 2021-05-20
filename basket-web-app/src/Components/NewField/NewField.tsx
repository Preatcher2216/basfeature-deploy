import Navigation from "./Navigation/Navigation";
import History from "./History/History";
import TeamChoose from "./TeamChoose/TeamChoose";
import SquardList from "./SquardList/SquardList";
import Field from "./Field/Field";
import Footer from "./Footer/Footer";
import React, {memo} from "react";
import {useSelector} from "react-redux";
import {getGameIsStarted} from "../NewMainPage/Main-Preson-Selectors";
import MobileFooter from "./Mobile-Footer/Mobile-Footer";
import MobileNavigation from "./Mobile-Navigation/Mobile-Navigation";

const NewField = () => {
    const gameIsStart = useSelector(getGameIsStarted)

    return(
        <div>
            <Navigation/>
            <MobileNavigation/>
            {
                gameIsStart ?   <History/> :<TeamChoose/>
            }
            {
                gameIsStart ? <Field/> : <SquardList/>
            }
            <Footer/>
            <MobileFooter/>
        </div>
    )
}

export default memo(NewField)