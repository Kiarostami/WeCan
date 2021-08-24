import React from 'react';
import './Rewards.css';
import CalculateDays from './CalculateDays';

function Rewards() {
    const {dayClasses, similar} = CalculateDays();
    return (
        <div>
            <div className="reward-back">
                <div className="reward-container">
                    <div className="reward-item reward-time">
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First day without smoking</h5>
                            <i className={similar.oneDay ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First week without smoking</h5>
                            <i className={similar.oneWeek ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First month without smoking</h5>
                            <i className={similar.oneMonth ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First 6 months without smoking</h5>
                            <i className={similar.sixMonths ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First year without smoking</h5>
                            <i className={similar.oneYear ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                        <div className="reward-time-item">
                            <i className="fas fa-medal"></i>
                            <h5 className="reward-txt"> First 2 years without smoking</h5>
                            <i className={similar.years ? "fas fa-trophy gold" : "fas fa-trophy grey"}></i>
                        </div>
                    </div>
                    <div className="reward-item reward-track">
                        <ul>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards
