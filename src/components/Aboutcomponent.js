import { Fragment } from "react";
import { aboutmeDataPar } from "../datas/alldatas";
import { aboutmeData } from "../datas/alldatas";
import Uclogospace from "./usablecomponentlogospace"
function Aboutmecomp(){
    return(
<Fragment>
    
    <div className="aboutSpace">
        <img src={aboutmeDataPar.aboutmeparimgsrc} alt="modify alt" id="imgAboutId"/>
        <p id="pAboutId">{aboutmeDataPar.aboutmepar}</p>
    </div>

    <div className="logoSpace">  
      {
     Uclogospace({elementtomap:aboutmeData},{elementid: 'aboutmeid'},{elementsolo: 'aboutsolo'},{elementtitle:'aboutmetitle'},{elementimg:'aboutmeimgsrc'},{elementtxt: 'aboutmetext'})
    }
    </div>
  </Fragment>
    )
}

export default Aboutmecomp;