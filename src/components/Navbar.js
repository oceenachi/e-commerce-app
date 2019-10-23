import React from 'react';
import MaterialIcon, {colorPalette} from "material-icons-react";
import logo from "../assets/bouncerlogo.png";



const Nav = () => {

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="firstNav flex3">
                    <div className="moneyOptions">
                        <select>
                            <option value="en">EN</option>
                        </select>
                        <select>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                    <div className="divIcons flex3">
                        <div className="flex2">
                            <MaterialIcon icon="person" />
                            <p className="icons">My Profile</p>
                        </div>
                        <div className="flex2">
                            <MaterialIcon icon="shop" />
                            <p className="icons">0 items $0.00</p>
                        </div>
                        <MaterialIcon icon="search" />
                    </div>
                </div>
                <div className="bouncerDiv" >
                    <img src={logo} className="bouncer" alt="" />
                </div>
                    <ul className="navbaritems">
               
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">IPHONE</a></li>
                    <li><a href="#">IPAD</a></li>
                    <li><a href="#">MACBOOK</a></li>
                    <li><a href="#">ACCESORIES</a></li>
                </ul>            
            </div>

        </React.Fragment>
    );
}
 
export default Nav;