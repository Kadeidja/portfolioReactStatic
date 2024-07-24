import { Fragment } from "react";
import { carrerPartData } from "../datas/alldatas"
import React, { useEffect } from "react";

function Carrercomp(){
    return (
        <>
        <div  id="carrerTimeline" className="carrerGlobal">
        <Fragment>
            {
                carrerPartData.sort((a,b)=>b.carrerid-a.carrerid).map((carrerSolo)=>
                    { 
                        return(
                             <div key={carrerSolo.carrerid} className="carrerPart solocarrerTimeline scrollBarCss" >
                                <div className="carrerSchoolIcon">
                                    <img src={carrerSolo.carrericon} alt="modify alt" className="carrerImgIcon"/>
                               </div>
                                <h3>{carrerSolo.carreryears[0]} - {carrerSolo.carreryears[1]}</h3>
                                <h4>{carrerSolo.carrername}</h4>
                                <p>{carrerSolo.carrerdescription}</p>
                            </div>
                        )
                        
        
                    }
                    
                )
            }       
        </Fragment>
        </div>
        </>
    
    )
}

export default Carrercomp;