import { Fragment } from "react";
import { carrerPartData } from "../datas/alldatas"
function Carrercomp(){
    return (
        
        <div id="carrerTimeline">
        <Fragment>
            {
                //.sort permet de trier de manieres deroissantes, et .map permet d'afficher les données une par une.
                carrerPartData.sort((a,b)=>b.carrerid-a.carrerid).map((carrerSolo)=>
                    {       
                        const divCatched = document.getElementsByClassName("carrerPart");
                        //fonction pour placer les etapes soit a droite ou a gauche
                        for (let i = 0; i < divCatched.length; i++) {
                            const divs = divCatched[i];
                            if ( i === carrerSolo.carrerid) {
                                divs.classList.add(carrerSolo.carrerplace);
                            }
                        }
                        return(
                             <div className="carrerPart solocarrerTimeline">
                               <img src={carrerSolo.carrericon} alt="modify alt" className="carrerImgIcon"/>
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
    
    )
}

export default Carrercomp;