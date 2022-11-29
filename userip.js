fetch('http://ip-api.com/json/?fields=61439')
.then((res)=>res.json())
.then((res)=> {
    console.log(res);
    document.getElementById("gfg").innerHTML=res.query;
});