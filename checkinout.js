//function enableCheckOut(){

  
  // document.getElementById("checkOut").disabled=false;
 

//}


function checkInDate(){
   
    let inDate=new Date(document.getElementById("checkIn").value);
    if(inDate!==""){
      document.getElementById("checkOut").disabled=false;  
    }
    let outDate=new Date(document.getElementById("checkOut").value);
    if(inDate.getTime() && outDate.getTime()){ 
    if(inDate.getTime()<=outDate.getTime()){
  
    let   timedifference = outDate.getTime() - inDate.getTime(); //the value is in milliseconds we convert it into days  
  let daydiff = timedifference/ (1000 * 60 * 60 * 24);   
  document.getElementById("output").innerHTML="Number of days is "+daydiff;
    }
    else{
      document.getElementById("output").innerHTML="Enter a valid checkIn Date"; 
    }
  }
}


