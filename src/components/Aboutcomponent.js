import { Fragment } from "react";
import { aboutmeData } from "../datas/alldatas";
function Aboutmecomp(){
    return(
<Fragment>
    {aboutmeData.map((aboutsolo)=>{
        return(
            <div key={aboutsolo.aboutmeid} className="subpartClass">
                <h3 className="subtitleClass">{aboutsolo.aboutmetitle}</h3>
                <img src={aboutsolo.aboutmeimgsrc} alt="aboutmeimg" className="subimgClass"/>
                <p>{aboutsolo.aboutmetext}</p>
            </div>
        )
    })}
</Fragment>
    )
}

export default Aboutmecomp;