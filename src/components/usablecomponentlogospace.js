function Uclogospace({elementtomap},{elementsolo},{elementid},{elementtitle},{elementimg},{elementtxt})
{
    return (
        elementtomap.map((elementsolo)=>{
            console.log(elementsolo);
            let elementSolo = ({elementsolo}).elementsolo;//ok
                return(
                <div key={({elementsolo}).elementid} className="subpartClass">
                <h3 className="subtitleuclClass">{elementsolo[elementtitle]}</h3>
                <img src={elementSolo[elementimg]} alt={elementSolo[elementtxt]} className="subimguclClass" loading="lazy"/>
                <p>{elementSolo[elementtxt]}</p>
             </div>
             )
             
        })
    
    )
    
}
export default Uclogospace;


