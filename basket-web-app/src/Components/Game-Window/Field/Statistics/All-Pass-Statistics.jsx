import React from 'react';
import field from './../../../../Images/Game-Field.svg'
import Classes from './All-Pass-Statistics.module.css'

const AllPassStatistics = (props) => {

    /*TODO - переделать функцию presentOfResultPass в анонимную стрелочную*/

    const closeStatistics = () => {
        props.statistics(false);
    }

    const presentOfResultPass = (resultPass, allPass) => {
        let presentPass = resultPass/allPass;
        if(allPass === 0){
            return '0'
        }else{
            let result = presentPass.toString().includes('.') ? presentPass.toFixed(1)*100 : presentPass*100;
            return result;
        }

    }

    return (
        <div className={Classes.Wrapper}>
            <button className={Classes.MessageBtn} onClick={closeStatistics}>Закрыть</button>
            <div className={Classes.Text}>Все передачи за игру</div>
            <div className={Classes.statisticField}>

                <div className={Classes.allPassField}>

                    {/*TODO - подумать над тем, чтобы разбить разные полся на разные компоненты*/}


                    <div className={Classes.firstField}>

                        <img src={field} alt='Images here'/>
                        <h2 className={Classes.field_1}>{props.fieldPieces[0].resultPass}/{props.fieldPieces[0].pass}</h2>
                        <h2 className={Classes.field_2}>{props.fieldPieces[1].resultPass}/{props.fieldPieces[1].pass}</h2>
                        <h2 className={Classes.field_3}>{props.fieldPieces[2].resultPass}/{props.fieldPieces[2].pass}</h2>
                        <h2 className={Classes.field_4}>{props.fieldPieces[3].resultPass}/{props.fieldPieces[3].pass}</h2>
                        <h2 className={Classes.field_5}>{props.fieldPieces[4].resultPass}/{props.fieldPieces[4].pass}</h2>
                        <h2 className={Classes.field_6}>{props.fieldPieces[5].resultPass}/{props.fieldPieces[5].pass}</h2>
                        <h2 className={Classes.field_7}>{props.fieldPieces[6].resultPass}/{props.fieldPieces[6].pass}</h2>
                        <h2 className={Classes.field_8}>{props.fieldPieces[7].resultPass}/{props.fieldPieces[7].pass}</h2>
                        <h2 className={Classes.field_9}>{props.fieldPieces[8].resultPass}/{props.fieldPieces[8].pass}</h2>
                        <h2 className={Classes.field_10}>{props.fieldPieces[9].resultPass}/{props.fieldPieces[9].pass}</h2>
                        <h2 className={Classes.field_11}>{props.fieldPieces[10].resultPass}/{props.fieldPieces[10].pass}</h2>
                        <h2 className={Classes.field_12}>{props.fieldPieces[11].resultPass}/{props.fieldPieces[11].pass}</h2>
                        <h2 className={Classes.field_13}>{props.fieldPieces[12].resultPass}/{props.fieldPieces[12].pass}</h2>
                        <h2 className={Classes.field_14}>{props.fieldPieces[13].resultPass}/{props.fieldPieces[13].pass}</h2>

                    </div>

                    <div className={Classes.secondField}>
                        <img src={field} alt='Images here'/>
                        <h2 className={Classes.secondField_1}>{presentOfResultPass(props.fieldPieces[0].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_2}>{presentOfResultPass(props.fieldPieces[1].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_3}>{presentOfResultPass(props.fieldPieces[2].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_4}>{presentOfResultPass(props.fieldPieces[3].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_5}>{presentOfResultPass(props.fieldPieces[4].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_6}>{presentOfResultPass(props.fieldPieces[5].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_7}>{presentOfResultPass(props.fieldPieces[6].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_8}>{presentOfResultPass(props.fieldPieces[7].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_9}>{presentOfResultPass(props.fieldPieces[8].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_10}>{presentOfResultPass(props.fieldPieces[9].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_11}>{presentOfResultPass(props.fieldPieces[10].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_12}>{presentOfResultPass(props.fieldPieces[11].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_13}>{presentOfResultPass(props.fieldPieces[12].pass,props.allGamePass)}%</h2>
                        <h2 className={Classes.secondField_14}>{presentOfResultPass(props.fieldPieces[13].pass,props.allGamePass)}%</h2>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default AllPassStatistics;