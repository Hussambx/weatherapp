
start();
function start(){
fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=d107d94978e6221f163ee8546b7ae0a0')
  .then(function(response) {
    // Successful response :)
    alert("we did it");
  })
  .catch(function(err) {
    // Error :(
  });
}