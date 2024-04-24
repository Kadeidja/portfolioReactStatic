import { Fragment } from "react";
import { workelemData } from "../datas/alldatas";
function Workscomp(){
    return(
        <Fragment>
            {workelemData.map((work)=>{
        return(
            <div>
                <h1>{work.title}</h1>
                <p>{work.description}</p>
            </div>
        )
    })}
        </Fragment>
    )
    
}

export default Workscomp;