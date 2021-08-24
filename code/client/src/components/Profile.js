import React from 'react';
import CalculateDays from './CalculateDays';
import './Profile.css'
import AppContext from './AppContext';
import { useContext } from 'react';

function Profile() {
    const {dayClasses, similar} = CalculateDays();
    const info = useContext(AppContext);
    return (
        <div className="prof-back">
            <div className="prof-container">
                <div className="prof-item prof-info">
                    <img src="images/profile.png" alt="profile"/>
                    <div className="info-container">
                        <h3 className="info-item">Username: {info.name}</h3>
                        <h3 className="info-item">Email: {info.email}</h3>
                    </div>
                </div>
                <div className="prof-item prof-track">
                    <h3 className="track-day">
                        You have not smoked for 8 days! Yessss! This is awesome!
                    </h3>
                    <p className="track-users">
                        Users stopped smoking from:<br />
                        <span className={similar.oneDay ? "green" : "orange"}>
                            1 day ago: {dayClasses.oneDay} {similar.oneDay ? "LIKE YOU!" : ""}
                        </span><br />
                        <span className={similar.oneWeek ? "green" : "orange"}>
                            1 week ago: {dayClasses.oneWeek} {similar.oneWeek ? "LIKE YOU!" : ""}
                        </span><br />
                        <span className={similar.oneMonth ? "green" : "orange"}>
                            1 month ago: {dayClasses.oneMonth} {similar.oneMonth ? "LIKE YOU!" : ""}
                        </span><br />
                        <span className={similar.sixMonths ? "green" : "orange"}>
                            6 months ago: {dayClasses.sixMonths} {similar.sixMonths ? "LIKE YOU!" : ""}
                        </span><br />
                        <span className={similar.oneYear ? "green" : "orange"}>
                            1 year ago: {dayClasses.oneYear} {similar.oneYear ? "LIKE YOU!" : ""}
                        </span><br />
                        <span className={similar.years ? "green" : "orange"}>
                            More than 1 year ago: {dayClasses.years} {similar.years ? "LIKE YOU!" : ""}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
