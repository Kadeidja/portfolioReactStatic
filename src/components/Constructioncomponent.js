import { Fragment } from "react";
import React, { useEffect } from "react";


function Constructioncomp(){

    useEffect(() => {
        const btnSwitch = document.getElementById("switchBtn");
        const scndTtl = document.getElementById('constrTtl');
        const msg = document.getElementById('constrMsg');
        //let scndTtlValue = scndTtl.innerText;
            // Define your async function
            const constructionFunc = async () => {
                let isToggled = false;//permet de créer le switch pour le bouton
                btnSwitch.addEventListener('click', function(){
                    isToggled = !isToggled;
                    this.classList.toggle('active');
                    this.setAttribute('aria-pressed', isToggled);
                    console.log("bouton cliqué");
                    console.log(btnSwitch.innerText);
                    console.log(isToggled)
                    if (isToggled === true) {
                        scndTtl.innerText = "Sorry";
                        msg.innerText = `This portfolio is still unfinished...`
                        btnSwitch.innerText = `TRANSLATE IN FR`;
                        btnSwitch.style.fontFamily = "Urbanist";
                    } else {
                        scndTtl.innerText = "Désolé"
                        msg.innerText = `Ce portfolio n'est pas encore fini...`
                        btnSwitch.innerText = `TRADUIRE EN ENG`;
                        btnSwitch.style.fontFamily = "Urbanist";
                    }
                    // eslint-disable-next-line no-const-assign
                    
                });
                
            }
          
            // Call the async function
            constructionFunc();
          }, []);
        

    return (
        <Fragment>
    <div>
        <h2 id="constrTtl">Désolé</h2>
        <h4 id="constrMsg"> Ce portfolio n'est pas encore fini...</h4>
        <div id="divBtnSwitch">
            <button id="switchBtn">
                <span id="spanCheckId">TRADUIRE EN ENG</span>
            </button>
        </div>
    </div>
    </Fragment>
)
}

export default Constructioncomp;