import React, {useSate} from 'react';
import {outlet, Link} from "react-router-dom";


const Nav = () => {
return(
    <div>
        <nav>
        <ul>
            <li><Link to ="/" className='nav_link'>ADD</Link></li>
            <li><Link to ="/switcher" className='nav_link'>SWITCHER</Link></li>
            <li><Link to ="/switch" className='nav_link'>SWITCH</Link></li>
            <li><Link to ="/stickynotes" className='nav_link'>STICKYNOTES</Link></li>
        </ul>
        </nav>
        <outlet />
    </div>
);
};
export default Nav;