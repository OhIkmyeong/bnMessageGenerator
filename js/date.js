export function make_end_string(data){
    const dash = '-----';
    const arrow = '▲';
    const timeResult = get_time();
    const result = 
    `<br>${dash} ${arrow} ${timeResult} ${data.recommit ? "재" : ""}커밋 완료하였습니다 ${dash}`;
    return result;
}//make_end_string

function get_time(){
    let result = '';
    
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2,"0");
    const date = String(now.getDate() + 1).padStart(2,"0");
    const day = dayKOR( now.getDay() );
    const getHour = now.getHours();
    const hour = getHour > 12 ? String(getHour - 12).padStart(2,"0") : String(getHour).padStart(2,"0");
    const min = String(now.getMinutes()).padStart(2,"0");
    const amORpm = getHour > 12 ? "PM" : "AM";

    result = `${year}-${month}-${date}-${day}-${hour}:${min}${amORpm}`;
    return result;
}//get_time

function dayKOR(day){
    switch(day){
        case 0 : return "SUN";
        case 1 : return "MON";
        case 2 : return "TUE";
        case 3 : return "WED";
        case 4 : return "THU";
        case 5 : return "FRI";
        case 6 : return "SAT";
    }
}//dayKOR