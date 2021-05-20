import React, {memo} from "react";
import Classes from './HederDescription.module.css'

const HeaderDescription = ({}) => {

    return (
        <div className={Classes.HeaderDescription}>
            <div className={Classes.Wrapper}>
                <span className={Classes.Text}>Добрый день!</span>
                <span className={`${Classes.Text} ${Classes.Main}`}>
                    Данный сайт создан студентами ИТА ЮФУ
                    в рамках проекта по дисциплине “Введение в инженерную деятельность”
                </span>
                <span className={`${Classes.Text} ${Classes.Past}`}>Мы получили зачёт, вы - сайт.</span>
            </div>
        </div>
    )
}

export default memo(HeaderDescription)