import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <div className="main">
        <div className='header'>
           <Logo/>
           <Menu/>
        </div>
        </div>
    );
}

export default Header;