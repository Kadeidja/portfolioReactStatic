import React from 'react';
import { Link } from "react-router-dom";
function Navbarcomp(){
    return(      
    <nav id="navSection">
      <button id="btnNavMenu" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">NAVBAR</span>
            </button>
       <div id="btnBranding">
         <a href="/">KADIDJA</a>
       </div>
       
       <div id="leMenuNav">
         <ul id="listMenuNav">
           <li className="listMenuNavItem"><Link to="/aboutme">QUI SUIS JE</Link></li>
           <li className="listMenuNavItem"><Link to="/carrer">MON PARCOURS</Link></li>
           <li className="listMenuNavItem"><Link to="/works">MON PORTFOLIO</Link></li>
           <li className="listMenuNavItem"><Link to="/contactme">ME CONTACTER</Link></li>
         </ul>
       </div>
     </nav>
      
           
    );
}

export default Navbarcomp;