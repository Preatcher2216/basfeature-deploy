import React from "react";
import Classes from "./AddTeamWindow.module.css"

const AddTeamWindow = ({createTeam, createTeamBtn}) => {
        return (

            <div>
                {createTeam &&
                <div className={Classes.wrapper}>
                    <div className={Classes.header}>
                        <span>Создайте команду</span>
                    </div>

                    <div className={Classes.closeBtn}>
                        <button onClick={createTeamBtn}>Закрыть</button>
                    </div>

                    <br/>

                    <div className={Classes.body}>
                        <form action="submit">
                            <span>Название команды</span>
                            <input type="text"/>
                            <div>
                                <span>Игрок №1</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №2</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №3</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №4</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №5</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №6</span>
                                <input type="text"/>
                            </div>
                            <div>
                                <span>Игрок №7</span>
                                <input type="text"/>
                            </div>

                        </form>

                    </div>
                </div>
                }
            </div>
        );
    }
;

export default AddTeamWindow;