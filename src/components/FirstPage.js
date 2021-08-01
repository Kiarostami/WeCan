import React from 'react'
import './FirstPage.css'
import { Link } from 'react-router-dom'
function FirstPage() {
    return (
        <div>
            <div className="first-cont">
                <div className="desc">
                    <h1 className="hero-txt">Welcome to <span id="logo-txt">WeCan</span> !</h1>
                    <Link to="/login"><button className="start-btn">Get Started</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
