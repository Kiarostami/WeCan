import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    
    return (
        <>
            <div className="nav-container">
                <ul className="nav-items">
                    <Link to="/">
                        <li className="nav-item">
                            <i className="fa fa-user"></i>
                            Profile
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-item">
                            <i className="fa fa-trophy"></i>
                            Rewards
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-item">
                            <i className="fa fa-wallet"></i>
                            Wallet
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-item">
                            <i className="fa fa-comment"></i>
                            Daily Stories
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-item">
                            <i className="fa fa-info"></i>
                            About Us
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
