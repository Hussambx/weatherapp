const currentweather = document.getElementById("current");
const currenttemp = document.getElementById("temp");
const locationa = document.getElementById("locationx");
const img = document.getElementById("curimg");
const hum = document.getElementById("hum");
const high = document.getElementById("high");
const low = document.getElementById("low");
const loc = document.getElementById("location");
let track = -1;
let det = 0;
const timexx =document.getElementById("time");
//Event listener for form data 
document.querySelector('form').addEventListener('submit',(e)=> {
  const formData = new FormData(e.target);
  e.preventDefault() 
  let a = formData.get("location");
  if(a!=""){
    start(a);
  }
});
start("toronto");
//Fetch's data accordingly to form input 
function start(location){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=d107d94978e6221f163ee8546b7ae0a0&cnt=7', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    currentweather.innerText = data.list[0].weather[0].description;
    currenttemp.innerText = degree(data.list[0].main.temp);
    locationa.innerText = data.city.name;
    img.src = "http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@4x.png";
    hum.innerText = "Hum:"+data.list[0].main.humidity+"%";
    high.innerText ="High:"+degree(data.list[0].main.temp_max)+"°";
    low.innerText="Low:"+degree(data.list[0].main.temp_min)+"°";
    console.log(data);
    document.getElementById("not").innerText="";
    tracktime(data.city.timezone);
    color();
  })
  .catch(e => {
    document.getElementById("not").innerText="Location Not Found" 
  })
}



function degree(num){
  return Math.round(num-273.15);
}
//Changes Background Color 
function color(){
  if(track==0){
    track++;
    document.body.style.background = "linear-gradient( to left,#F4D03F,#16A085)";
  }else if(track==1){
    track++;
    document.body.style.background = "linear-gradient( to right,#08AEE, #2AF598)";
  }else if(track==2){
    document.body.style.background = "linear-gradient( to right,#21D4FD, #B721FF)";
    track++;
  }else if(track==3){
    document.body.style.background = "linear-gradient( to right,#FAD961,#F76B1C)";
track++
  }else{
    document.body.style.background = "linear-gradient( to right,#136a8a, #80D0C7)";
track = 0;
  }

}


const sleep = (milliseconds) => {
  
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//Added Track Time Function 
const tracktime= async (time) => {
  let place = locationa.innerText;
  while(place==locationa.innerText){
    await sleep(1000)
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * +time)
    local = new Date(atlanta);
    let localtimex =local.getHours()+':'+local.getMinutes()+':'+local.getSeconds();
  timexx.innerText=localtimex;
  }
}