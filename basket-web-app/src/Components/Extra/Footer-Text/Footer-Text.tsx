import React from "react";

const FooterText = () => {

    return(
        <div className='PersonPageFooter' >
            <div className="Project">
                <span className="PersonPageFooterTextTitle">Проект</span>
                <span className="PersonPageFooterText"><a href='https://vk.com/proictis'>Проектный офис ИКТИБ</a></span>
                <span className="PersonPageFooterText"><a href='https://sfedu.ru/'>Южный Федеральный университет</a></span>
                <span className="PersonPageFooterText"><a href='https://ictis.sfedu.ru/'>Институт Компьютерных Технологий и информационной безопасности</a></span>
            </div>
            <div className="Project">
                <span className="PersonPageFooterTextCenter">Связь с нами</span>
                <span className="PersonPageFooterText">BasFeature</span>
                <span className="PersonPageFooterText">+7 905-459-21-58</span>
            </div>
            <div className="Project">
                <span className="PersonPageFooterTextEnd">Дополнительная информация</span>
                <span className="PersonPageFooterText"><a href='https://vk.com/sed_announce'>Кафедра МОП ЭВМ</a></span>
                <span className="PersonPageFooterText"><a href="http://sapr.tti.sfedu.ru/">Кафедра САПР</a></span>
                <span className="PersonPageFooterText"><a href="http://vt.sfedu.ru/">Кафедра ВТ</a></span>
            </div>
        </div>
    )
}

export default FooterText