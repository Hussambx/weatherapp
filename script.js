const currentweather = document.getElementById("current");
const currenttemp = document.getElementById("temp");
const locationa = document.getElementById("locationx");
const img = document.getElementById("curimg");
start();
function start(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d107d94978e6221f163ee8546b7ae0a0', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    currentweather.innerText = data.weather[0].description;
    currenttemp.innerText = Math.round(data.main.temp-273.15);
    locationa.innerText = data.name;
    img.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    console.log(data.weather[0].description);
    console.log(data);
  })
  .catch(e => {
    console.log(e)
  })
}
