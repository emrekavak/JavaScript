function digitalClock(){    // create an digital dynamic clock on the html page
    var date= new Date();
    var hours=date.getHours() + '';
    var minutes=date.getMinutes() + '';
    var seconds=date.getSeconds() + '';
    var day= date.getDay() + '';
    
    if(hours.length<2){ // after midnight, we will just one digit, for fix problem we add '0' according to length digits
        hours='0'+hours;
    }
    
    if(minutes.length<2){
        minutes='0'+minutes;
    }
    
    if(seconds.length<2){
        seconds='0' + seconds;
    }
    var  weekDays=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    var clock = weekDays[day] +' '+ hours +": "+ minutes + ': ' + seconds;  // clock variable holds all informations
    
    document.getElementById('clock').innerHTML=clock;
}

digitalClock();
setInterval(digitalClock,1000); // calls the function according to given ms again and again
