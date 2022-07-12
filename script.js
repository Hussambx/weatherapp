const currentweather = document.getElementById("current");
const currenttemp = document.getElementById("temp");
start();
function start(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d107d94978e6221f163ee8546b7ae0a0', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    currentweather.innerText = data.weather[0].description;
    currenttemp.innerText = data.main.temp-273.15;
    console.log(data.weather[0].description);
    alert("we did it");
  });
}
