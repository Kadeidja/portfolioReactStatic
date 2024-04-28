//import Compositioncomp from "../components/Compositioncomponent";
import Constructioncomp from "../components/Constructioncomponent";
import Singlespacecomp from "../components/Singlespacecomponent";

function Constructionpagecomp(){
    return (
        Singlespacecomp({ showsingleComponent: <Constructioncomp/>})
    )
}

export default Constructionpagecomp;