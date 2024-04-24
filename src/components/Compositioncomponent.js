function Compositioncomp({titleName,showoffComponent}){
return (
    <section className="bigSection">

    <section className="subSectionTtl">
        <div className="divSectionTtl">
            {titleName}
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