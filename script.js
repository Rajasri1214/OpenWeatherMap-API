/* Add an event listener to the button to call fetech weather function when clicked */
document.getElementById("fetch-data").addEventListener("click", fetchWeather);

/* Function to fetech weather data */
function fetchWeather() {
    const city = document.getElementById("city").value; /* Get the city name from input field */
    const apiKey = "f59b361e58cbe5e7dbea4141dc692fb8"; /* OpenWeatherMap API key */
    if (!city) {
        document.getElementById("data").textContent = "Please enter a city name.";
        return;
    }
    /* Construct API URL with city name */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url) /*Fetch data from API*/
        .then(response => response.json()) /* Convert response to JSON */
        .then(data => { /* If the API returns an error , display a message */
            if (data.cod !== 200) {              
                document.getElementById("data").textContent = "City not found. Please try again.";
                return;
            }
            /* Update the UI with feteched weather details */
            document.getElementById("data").innerHTML = `
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}% </p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>`;
        })
        .catch(error => { /* Handle any errors in fetching the data */
            document.getElementById("data").textContent = "Failed to fetch weather data."; 
            console.error("Error fetching data:", error);
        });
}
    
