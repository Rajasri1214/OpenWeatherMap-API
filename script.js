
document.getElementById("fetch-data").addEventListener("click", fetchWeather);

function fetchWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "f59b361e58cbe5e7dbea4141dc692fb8";
    if (!city) {
        document.getElementById("data").textContent = "Please enter a city name.";
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("data").textContent = "City not found. Please try again.";
                return;
            }
            document.getElementById("data").textContent = `Temperature: ${data.main.temp}°C, Humidity: ${data.main.humidity}%, Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById("data").textContent = "Failed to fetch weather data.";
            console.error("Error fetching data:", error);
        });
}
    