import { Outlet } from 'react-router-dom';
import Navbarcomp from '../components/Navcomponent';

function Compositionpagecomp(){
    return (
        <div className="App">
            <Navbarcomp />
            <Outlet />
        </div>
    );
}

export default Compositionpagecomp;