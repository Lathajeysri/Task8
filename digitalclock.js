function displayTime(){
    var d=new Date();  
                       // console.log(d);  It will give u the  today date month and timing
var hour=d.getHours();  //It will give u the current hrs between  0 and 23
                        // console.log(hour);
 var min=d.getMinutes();  // it will give u the current minutes between 0 and 59
 var sec=d.getSeconds();// it will give u the seconds between 0 and 59
 var amOrPm="AM";
 if(hour>=12){
 amOrPm="PM";
 }
 if(hour>=12) {    //if hour is 13 then 13-12=1 pm
 hour=hour-12;
 }
 if(hour<10){
    hour="0"+hour;
 }
 if(min<10){
    min="0"+min;
}
if(sec<10){
    sec="0"+sec;
}
 document.getElementById("clock").innerHTML=hour+":"+min+":"+sec+" "+amOrPm;                      
}
setInterval(displayTime,1000);
