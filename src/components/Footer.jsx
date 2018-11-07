import React from 'react';
import logo from "./images/logo-ck.png";

const Footer = () => {
    return ( 
        <div className="Footer pb-3 pt-3 bg-light">
            <span className="bulle"><img width="40" src={logo} alt="epidemium logo" className="mr-3" /></span>
        </div>
    );
}
 
export default Footer;