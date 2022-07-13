const currentweather = document.getElementById("current");
const currenttemp = document.getElementById("temp");
const locationa = document.getElementById("locationx");
const img = document.getElementById("curimg");
const hum = document.getElementById("hum");
const high = document.getElementById("high");
const low = document.getElementById("low");

document.querySelector('form').addEventListener('submit',(e)=> {
  const formData = new FormData(e.target);
  e.preventDefault() 
  alert(e)
  let a = formData.get("location");
  alert(a);
});


start();
function start(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d107d94978e6221f163ee8546b7ae0a0', {mode: 'cors'})
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
    console.log(data.weather[0].description);
    console.log(data);
  })
  .catch(e => {
    console.log(e)
  })
}



function degree(num){
  return Math.round(num-273.15);
}