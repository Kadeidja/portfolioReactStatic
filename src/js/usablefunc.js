export default function Usablefunc ({elementToMap},{elementId},{elementTitle},{elementDescription}) 
{
    return(
        elementToMap.map((elem)=>{
            console.log(elem);
        return(
            <div key={elem[elementId]} className="workelemDiv">
                <h1 className="workelemTtl">{elem[elementTitle]}</h1>
                <div className="workcolorDiv"></div>
                <p className="workelemP">{elem[elementDescription]}</p>
            </div>
        )
    })
    )
    };
 
export function Usablefuncmini ({elementMaped},{subelementToMap},{subelementId},{subelementImgSrc})
{
    
    return(
        elementMaped.map((elem)=>{
            return (
                elem[subelementToMap].map((subElement)=>{
                    return(
                        <div key={subElement[subelementId]} className="workelemSubImg">
                        <img src={subElement[subelementImgSrc]} alt="modify alt" class="imgWorkClass"/>
                        </div>
                )
                
            })
            )
        })
    )
};

/*function changecolor({elemtocatch},{elemcolor}){
    //const squareElem = document.getElementsByClassName(`"`+{elemtocatch}+`"`);
    console.log(elemtocatch,elemcolor);
    const squareElem = document.getElementsByClassName(`"`+{elemtocatch}+`"`);
    squareElem.style.backgroundColor =`"`+ {elemcolor}+`"`; 
    console.log(elemcolor,elemtocatch);
    //defaultValue={changecolor({elemtocatch: 'workcolorDiv'},{elemcolor: elem[elemsquareColor]})} 
}*/

export function showTxtImgBox ({elemstoMap},{elemId},{elemTitle},{elemImgSrc},{elemDescription},{subelemId},{subelemSrc},{elemsquareColor},{elemImgIconSrc},{elemsubidicon},{elemsubimgicon})
{
 return(
            elemstoMap.map((elem)=>{    
                console.log(elem[elemsquareColor]);
            return(
                <>
                <div key={elem[elemId]} className="workelemDiv">
                    <h1 className="workelemTtl">{elem[elemTitle]}</h1>
                    <div className="workcolorDiv" style={{backgroundColor:elem[elemsquareColor]}}></div>
                    
                    {elem[elemImgSrc].map((subelem)=>{
                        return(
                            <div key={subelem[subelemId]} className="workelemSubImg">
                            <img src={subelem[subelemSrc]} alt="modify alt" class="imgWorkClass"/>
                            </div>  
                    )
                },
   
            )}
            <p className="workelemP">{elem[elemDescription]}</p>
                <div id="iconlogoPart">
                    
                    <ul id="uliconlogoPart">
                    {elem[elemImgIconSrc].map((subelemIcon)=>{
                        console.log(subelemIcon);
                        return(
                            <li key={subelemIcon[elemsubidicon]} className="elemSubImgIcon">
                            <img src={subelemIcon[elemsubimgicon]} alt="modify alt" class="elemimgClassIcom"/>
                            </li>  
                    )
                    
                },
   
            )}</ul>
                </div>
                </div>
                </>
            )
            
        }
    )

)
    
}

/*const squareElem = document.getElementsByClassName('workcolorDiv');
        squareElem.style.backgroundColor = {elem[elemsquareColor]}; 
*/

