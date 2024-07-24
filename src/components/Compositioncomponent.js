function Compositioncomp({titleName,showoffComponent}){
return (
    <section className="bigSection">

    <section className="subSectionTtl">
        <div className="divSectionTtl">
            <h1>{titleName}</h1>
        </div>
    </section>

    <section className="subSectionShow">
        <div className="divSectionShow">
            {showoffComponent}
        </div>        
    </section>

    </section>
    
)
}

export default Compositioncomp;