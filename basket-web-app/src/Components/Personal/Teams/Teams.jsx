import React, {useState} from 'react';
import Classes from './Teams.module.css';
import AddTeamWindow from "./Add-Team/AddTeamWindow";

const Teams = () => {
    const [createTeam, setCreateTeam] = useState(false)
    console.log(createTeam)

    const createTeamBtn = prev => setCreateTeam(prev => !prev)
    return (
        <div className={Classes.contentLocal}>
            <div className={Classes.title}>Мои команды</div>
            <div className={Classes.addTeam}>
                <p>Добавить команду</p>
                <button onClick={createTeamBtn} type="submit">Добавить</button>
            </div>
            <div className={Classes.teamsName}>Star team</div>
            <div className={Classes.teamsName}>Dream team</div>
            <div className={Classes.teamsName}>Pop team</div>

            <AddTeamWindow createTeam={createTeam} createTeamBtn={createTeamBtn}/>

        </div>

    );
}

export default Teams;