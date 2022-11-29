function generateNumber(){
    var prevRegNumber=document.getElementById("regNumber").value;
    console.log(prevRegNumber);
    const regex_pattern=/^(TN([,-]|\s)?[0-9]{2}([,-]|\s)?[A-Z]{2}[0-9]{4})$/;        //to add another state to tamilnadu use^(TN|UP)  s for space ? zero or one  for space
                                                                   // [0-9]{2} it should contain number betwenn 0 and 9 2 times
if (regex_pattern.test(prevRegNumber)) {
 const str1=prevRegNumber.slice(0,4);       //it will slice from position zero to end position end not included
 var str2=prevRegNumber.slice(4,6);
 var str3=prevRegNumber.slice(-4);          //it will slice fron end
 console.log(str1);
 console.log(str2);
 console.log(str3);
 var nextRegNumber=parseInt(str3)+1;   //converting string into integer
                                    //console.log(nextRegNumber);
                                    //console.log(nextRegNumber.length);
     nextRegNumbers=nextRegNumber.toString();    //converting integer into  string
                                           //console.log(nextRegNumbers.length);
     if (nextRegNumbers.length==1){                                                   //Applying condition for reg number less than or equal to 4
        document.getElementById("output").innerHTML="Next Registration number is "+str1+str2+"0"+"0"+"0"+nextRegNumber;
    }
    if (nextRegNumbers.length==2){
        document.getElementById("output").innerHTML="Next Registration number is "+str1+str2+"0"+"0"+nextRegNumber;
    }
    if (nextRegNumbers.length==3){
        document.getElementById("output").innerHTML="Next Registration number is "+str1+str2+"0"+nextRegNumber;
    }
                                  
if (nextRegNumbers.length==4){
    document.getElementById("output").innerHTML="Next Registration number is "+str1+str2+nextRegNumber;      
}                                                                               //end of less or equal to 4
else if(nextRegNumbers.length>4){                                        //for values greater than 4 or >9999
var str2first=str2.slice(0,1);
var str2second=str2.slice(-1);
console.log(str2first);
console.log(str2second); 
if(str2second=='Z'){
    console.log("It is equal to z");
    var newsecond=str2first.charCodeAt(0)+1;
    var newstringtwo=String.fromCharCode(newsecond);  
    
    document.getElementById("output").innerHTML="Next Registration number is "+str1+newstringtwo+'A'+'0001';   
}
else{
    console.log("It is not equal to z");
    var newsecond=str2second.charCodeAt(0)+1;
    var newstringtwo=String.fromCharCode(newsecond); 
    document.getElementById("output").innerHTML="Next Registration number is "+str1+str2first+newstringtwo+'0001';  
}
}
}                                     //end of regex pattern validating input
else {
    alert("Enter a valid Registration Number");
 return;
}
}                            //End of function