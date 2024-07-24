import { Fragment } from "react";
import { workelemData } from "../datas/alldatas";
//import {showTxtImgBox}  from "../js/usablefunc";
function Workscomp(){
    return(
        
            <div id="worksBigSpace">
                <Fragment>
       {
       workelemData.map((workSolo)=>{
            return(
                <div key={workSolo.workelemid} className="worksubpartClass">
                    <h3 className="worksubtitleuclClass">{workSolo.workelemtitle}</h3>
                    {workSolo.workelemWebSite.map((wrkelemWSite)=>(
                            <iframe title={workSolo.workelemtitle} src={wrkelemWSite.wrkwebsitesrc} className="workiframeClass">
                            </iframe>))
                    }
                    <div className="workpClass">
                    {workSolo.workelemtext.map((workTxtSolo)=>
                    (
                        <p key={workTxtSolo.wrktxtid}>{workTxtSolo.wrktxt}</p>
                         ))}
                         <p>{workSolo.workelemdescription}</p>
                         </div>
                  </div>
                )
            
            })
            }
            </Fragment>
            </div>
        
        
    )
    
}

export default Workscomp;