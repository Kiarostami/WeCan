import React from 'react'
import AppContext from './AppContext';
import { useContext } from 'react';

function CalculateDays() {
    const info = useContext(AppContext);
    let today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let d = today.getDate();
    let currentDate = y + "-" + m + "-" + d;
    var cDay = Date.parse(currentDate);
    var dayClasses = {
        you: info.days,
        oneDay: 0,
        oneWeek: 0,
        oneMonth: 0,
        sixMonths: 0,
        oneYear: 0,
        years: 0
    };
    var similar = {
        oneDay: false,
        oneWeek: false,
        oneMonth: false,
        sixMonths: false,
        oneYear: false,
        years: false
    };
    info.users.forEach( (user) => {
        if(user.username != info.name){
            let sDay = Date.parse(user.startDay);
            let days = (Math.ceil((cDay - sDay) / (1000 * 60 * 60 * 24)));
            if(days == 1){
                dayClasses.oneDay += 1;
            } else if(days >= 7 && days < 14){
                dayClasses.oneWeek += 1;
            } else if(days >= 30 && days < 60){
                dayClasses.oneMonth += 1;
            } else if(days >= 182 && days < 212){
                dayClasses.sixMonths += 1;
            } else if(days >= 365 && days < 730){
                dayClasses.oneYear += 1;
            } else if(days >= 730){
                dayClasses.years += 1;
            }
        }
    });
    var yourDays = info.days;
    if(yourDays >= 730){
        similar.oneDay = true;
        similar.oneWeek = true;
        similar.oneMonth = true;
        similar.sixMonths = true;
        similar.oneYear = true;
        similar.years = true;
    } else if(yourDays >= 365){
        similar.oneDay = true;
        similar.oneWeek = true;
        similar.oneMonth = true;
        similar.sixMonths = true;
        similar.oneYear = true;
    } else if(yourDays >= 182){
        similar.oneDay = true;
        similar.oneWeek = true;
        similar.oneMonth = true;
        similar.sixMonths = true;
    } else if(yourDays >= 30){
        similar.oneDay = true;
        similar.oneWeek = true;
        similar.oneMonth = true;
    } else if(yourDays >= 7){
        similar.oneDay = true;
        similar.oneWeek = true;
    } else if(yourDays >= 1){
        similar.oneDay = true;
    }
    
    return {dayClasses, similar};
}

export default CalculateDays;
