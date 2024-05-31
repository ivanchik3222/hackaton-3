document.addEventListener("DOMContentLoaded", function() {
    const skoMenu = document.getElementById('skoMenu');
    const skoSubMenu = document.getElementById('skoSubMenu');

    skoMenu.addEventListener('mouseover', function() {
        skoSubMenu.style.display = 'block';
    });

    skoMenu.addEventListener('mouseout', function() {
        skoSubMenu.style.display = 'none';
    });

    const apiKey = '1f67070b9a5e105654471343e7e0729c';
    const city = 'Petropavlovsk,KZ';
    
    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <p><strong>Температура:</strong> ${data.main.temp} °C</p>
                <p><strong>Влажность:</strong> ${data.main.humidity} %</p>
                <p><strong>Описание:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching current weather data:', error));
    
    // Fetch weather forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const forecastData = document.getElementById('forecast-data');
            forecastData.innerHTML = data.list.slice(0, 5).map(forecast => `
                <div>
                    <p><strong>Дата:</strong> ${new Date(forecast.dt_txt).toLocaleString()}</p>
                    <p><strong>Температура:</strong> ${forecast.main.temp} °C</p>
                    <p><strong>Описание:</strong> ${forecast.weather[0].description}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching weather forecast data:', error));
});
