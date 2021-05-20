import React from 'react'

type PropsType = {
    teamTitle: string
    isMyTeam: boolean
    addedPlayers: Array<any>
}

const EnemyCard: React.FC<PropsType> = ({teamTitle, addedPlayers,isMyTeam}) => {

    const numbers = addedPlayers[0].teamNumbers
    const players = addedPlayers[0].teamPlayers

    let playersElements = players.map((elem: any) => {
        return(
            <span className="TeamsCardPlayerName">{elem}</span>
        )
    })

    let numbersElements = numbers.map((elem: any) => {
        return(
            <span className='TeamsCardPlayerNumber'>{elem}</span>
        )
    })
    return(
        <>
            <div className={isMyTeam ? 'TeamsCard' : 'TeamsCard EnemyTeamCard' }>
                <div className="TeamsCardTitle">{teamTitle}</div>
                <div className="TeamsCardContent">
                    <div className="TeamsCardPlayersNames">
                        {playersElements}
                    </div>
                    <div className="TeamsCardPlayersNumbers">
                        {numbersElements}
                    </div>
                </div>
                <div className="TeamsCardButtonContainer">
                    <button className="TeamsCardButton">Подробнее</button>
                </div>
            </div>
        </>
    )
}

export default EnemyCard