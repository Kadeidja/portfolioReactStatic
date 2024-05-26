import { Fragment } from "react";
import { carrerPartData } from "../datas/alldatas"
function Carrercomp(){
    return (
        <>
        <div id="carrerTimeline">
        <Fragment>
            {
                //.sort permet de trier de manieres deroissantes, et .map permet d'afficher les données une par une.
                carrerPartData.sort((a,b)=>b.carrerid-a.carrerid).map((carrerSolo)=>
                    {       
                        /* function loadPlace (){
                            const divCatched = document.getElementsByClassName("carrerPart");
                        //fonction pour placer les etapes soit a droite ou a gauche
                       for (let i = 0; i < divCatched.length; i++) {
                                if ( carrerSolo.carrerid === i) {
                                    const divs = divCatched[i];
                            divs.classList.add(carrerSolo.carrerplace);
                            }
                            
                        }*/
                        const divCatched = document.getElementsByClassName("carrerPart");
                        console.log(divCatched);
                        let divCatchedarray = Array.from(divCatched);
                        console.log(divCatchedarray);
                        for (let i = 0; i < divCatched.length; i++) {
                            if ( carrerSolo.carrerid === i) {
                                const divs = divCatched[i];
                        divs.classList.add(carrerSolo.carrerplace);
                        }}
                        /*divCatchedarray.forEach(divs => {
                            divs.classList.add(carrerSolo.carrerplace);
                            console.log(divs);
                            console.log(carrerSolo.carrerplace);
                            
                        })*/
                        ;
                        //divCatched.classList.add(carrerSolo.carrerplace);
                        //} onLoad={loadPlace()}
                        return(
                             <div key={carrerSolo.carrerid} className="carrerPart solocarrerTimeline" >
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
        </>
    
    )
}

export default Carrercomp;