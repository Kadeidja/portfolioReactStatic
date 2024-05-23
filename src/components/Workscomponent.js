import { Fragment } from "react";
import { workelemData } from "../datas/alldatas";
import {showTxtImgBox}  from "../js/usablefunc";
function Workscomp(){
    return(
        <Fragment>
            {
                showTxtImgBox ({elemstoMap:workelemData},{elemId:'workelemid'},{elemTitle:'workelemtitle'},{elemImgSrc:'workelemimgsrc'},{elemDescription:'workelemdescription'},{subelemId:'wrkimgid'},{subelemSrc:'wrkimgsrc'},{elemsquareColor:'workelemsquarecolor'},{elemImgIconSrc:'workelemicon'},{elemsubidicon:'wrktxticonid'},{elemsubimgicon:'wrkimgsrcicon'})
            }
        </Fragment>
    )
    
}

export default Workscomp;