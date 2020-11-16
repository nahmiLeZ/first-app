import React from 'react';
import LogoF from "./LogoF";
import MenuF from "./MenuF";
import CopyRight from "./CopyRight";

function Footer(props) {
    return (
        <div className="mainFooter">
            <div className="footer-container">
                <LogoF/>
                <MenuF/>
                <CopyRight/>
            </div>
        </div>
    );
}

export default Footer;