let day=document.getElementById('day')
let date=document.getElementById('date')
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["January","February","March","April","June","July","August","September","October","November","December"]
let d=new Date();
day.innerHTML=days[d.getDay()];
date.innerHTML=d.getDate()+"  "+months[d.getMonth()-1];
let cityName=document.getElementById("cityName");
let city=document.getElementById("city");
let temperature=document.getElementById("temperature");
let weatherimg=document.getElementById("weatherimg");
function toFixed(num, fixed) {
    fixed = fixed || 0;
    fixed = Math.pow(10, fixed);
    return Math.floor(num * fixed) / fixed;
}
const getInfo=async (e)=>{
    e.preventDefault();
    cityName=cityName.value;
    if(cityName==""){
        city.innerHTML="Please enter any city name"
    }
    else{
        try{
            const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98fef1131b07f8e91b255ffb169bf407`);
            const jsonData=await data.json();
            const arrData=[jsonData];
            city.innerHTML=arrData[0].name+", "+arrData[0].sys.country;
            temperature.innerHTML=toFixed(arrData[0].main.temp-273.15,2)+"&deg;C";
            if(arrData[0].weather[0].main=='Rainy'){
                weatherimg.src="../images/thunder.png"
            }
            else if(arrData[0].weather[0].main=='Clouds'){
                weatherimg.src="../images/cloud.png"
            }
            else if(arrData[0].weather[0].main=='Haze'){
                weatherimg.src="../images/sunny.png"
            }
            else if(arrData[0].weather[0].main=='Clear'){
                weatherimg.src="../images/sunny.png"
            }
            console.log(arrData[0].weather[0].main)
        }
        catch{
            city.innerHTML="Please enter the city name properly"
        }
    }
}
document.getElementById("submitBtn").addEventListener('click',getInfo)