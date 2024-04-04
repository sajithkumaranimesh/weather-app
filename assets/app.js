let apiKey = "8a0eb79a8d214a3ca42133457242703";



function checkWeather(city){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=yes`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            document.querySelector(".time").innerHTML = data.current.temp_c+"°C";
            document.querySelector(".date").innerHTML = data.location.localtime;
            document.querySelector(".humidity").innerHTML = data.current.humidity+" %";
            document.querySelector(".wind").innerHTML = data.current.wind_kph+" kph";
            document.querySelector(".country").innerHTML = data.location.country;
            document.querySelector(".time-zone").innerHTML = data.location.region;

            document.querySelector(".temp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+"°C";
            document.querySelector(".mondayDate").innerHTML = data.forecast.forecastday[0].date;

            document.querySelector(".tueTemp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c+"°C";
            document.querySelector(".tueDate").innerHTML = data.forecast.forecastday[1].date;

            document.querySelector(".wedTemp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c+"°C";
            document.querySelector(".wedDate").innerHTML = data.forecast.forecastday[2].date;

            document.querySelector(".thurTemp").innerHTML = data.forecast.forecastday[3].day.avgtemp_c+"°C";
            document.querySelector(".thurDate").innerHTML = data.forecast.forecastday[3].date;

            document.querySelector(".friTemp").innerHTML = data.forecast.forecastday[4].day.avgtemp_c+"°C";
            document.querySelector(".friDate").innerHTML = data.forecast.forecastday[4].date;

            document.querySelector(".satTemp").innerHTML = data.forecast.forecastday[5].day.avgtemp_c+"°C";
            document.querySelector(".satDate").innerHTML = data.forecast.forecastday[5].date;
        })
}

function searchWeather() {
    let city = document.getElementById("cityInput").value;
    checkWeather(city);
}

checkWeather("Galle");

