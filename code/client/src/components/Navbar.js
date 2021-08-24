import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    
    return (
        <>
            <div className="nav-container">
                <ul className="nav-items">
                    <Link to="/profile">
                        <li className="nav-item">
                            <i className="fa fa-user"></i>
                            Profile
                        </li>
                    </Link>
                    <Link to="/rewards">
                        <li className="nav-item">
                            <i className="fa fa-trophy"></i>
                            Rewards
                        </li>
                    </Link>
                    <Link to="/savings">
                        <li className="nav-item">
                            <i className="fa fa-wallet"></i>
                            Savings
                        </li>
                    </Link>
                    <Link to="/stories">
                        <li className="nav-item">
                            <i className="fa fa-comment"></i>
                            Daily Stories
                        </li>
                    </Link>
                    <Link to="/about">
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
