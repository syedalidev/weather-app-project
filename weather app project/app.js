const input_box = document.querySelector('.input_box');
const searchbtn = document.getElementById('searchbtn');
const temperature = document.querySelector('.teamperature');
const description = document.querySelector('.description');
const Humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const city = document.querySelector(".city");


const apikey = "a94e51e0970370d280e4ad2c557d9e26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apikey;

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.querySelector('.teamperature').innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById('humidity').innerHTML = data.main.humidity + "%";
        document.getElementById('wind-speed').innerHTML = data.wind.speed + "km/h";
        document.querySelector('.description').innerHTML = data.name;

        switch (data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "pics/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "pics/clear.png";
                break;
            case 'Rain':
                weather_img.src = "pics/snow.png";
                break;
            case 'Mist':
                weather_img.src = "pics/6122714.png";
                break;
            case 'Snow':
                weather_img.src = "pics/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.webp";
                break;

        }


        // Logging the weather data (you can customize this part)
        console.log("Weather Data:", data);
        console.log(`The current temperature in ${city} is ${data.main.temp}°C`);
    } catch (error) {
        alert("Not found", error);
    }


}

searchbtn.addEventListener('click', () => {
    checkWeather(input_box.value);
})