const currentweather = document.getElementById("current");
const currenttemp = document.getElementById("temp");
const locationa = document.getElementById("locationx");
const img = document.getElementById("curimg");
const hum = document.getElementById("hum");
const high = document.getElementById("high");
const low = document.getElementById("low");
const loc = document.getElementById("location");
let track = -1;
//Event listener for form data 
document.querySelector('form').addEventListener('submit',(e)=> {
  const formData = new FormData(e.target);
  e.preventDefault() 
  alert(e)
  let a = formData.get("location");
  if(a!=""){
    start(a);
  }
});
start("toronto");
//Fetch's data accordingly to form input 
function start(location){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=d107d94978e6221f163ee8546b7ae0a0', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    currentweather.innerText = data.weather[0].description;
    currenttemp.innerText = degree(data.main.temp);
    locationa.innerText = data.name;
    img.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png"
    hum.innerText = "Hum:"+data.main.humidity+"%";
    high.innerText ="High:"+degree(data.main.temp_max)+"°";
    low.innerText="Low:"+degree(data.main.temp_min)+"°";
    console.log(data);
    document.getElementById("not").innerText="";
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * +data.timezone)
    local = new Date(atlanta);
    alert(local.getHours()+':'+local.getMinutes())



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
  alert(track);
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