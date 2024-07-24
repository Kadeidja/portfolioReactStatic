import { Fragment } from "react";
import { aboutmeDataPar } from "../datas/alldatas";
import { aboutmeData } from "../datas/alldatas";
import Uclogospace from "./usablecomponentlogospace"
function Aboutmecomp(){
    return(
<Fragment>
 <div id="aboutSpaceBigSpace"> 
    <div id="aboutSpace">
        <img src={aboutmeDataPar.aboutmeparimgsrc} alt="modify alt" id="imgAboutId"/>
        <p id="pAboutId">{aboutmeDataPar.aboutmepar}</p>
    </div>
    <div>
      <h2 className="subSectionTtlnope">SKILLS</h2>
    </div>
    <div id="logoSpace">  
      {
      Uclogospace({elementtomap:aboutmeData},{elementid: 'aboutmeid'},{elementsolo: 'aboutsolo'},{elementtitle:'aboutmetitle'},{elementimg:'aboutmeimgsrc'},{elementtxt: 'aboutmetext'})
      }
    </div>
    </div>  
  </Fragment>
    )
}

export default Aboutmecomp;