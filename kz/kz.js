document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '1f67070b9a5e105654471343e7e0729c';
    const cities = [
        { name: 'Petropavlovsk,KZ', displayName: 'Petropavlovsk', id: 'weather-data-ptr' },
        { name: 'Astana,KZ', displayName: 'Astana', id: 'weather-data-ast' },
        { name: 'Almaty,KZ', displayName: 'Almaty', id: 'weather-data-alm' },
        { name: 'Oral,KZ', displayName: 'Oral', id: 'weather-data-oral' },
        { name: 'Semey,KZ', displayName: 'Semey', id: 'weather-data-sem' },
        { name: 'Shymkent,KZ', displayName: 'Shymkent', id: 'weather-data-shym'}
    ];

    // Fetch current weather data for each city
    cities.forEach(city => {
        const weatherData = document.getElementById(city.id);
        weatherData.innerHTML = `
            <h3>${city.displayName}</h3>
            <p>Загрузка данных...</p>
        `;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                weatherData.innerHTML = `
                    <h3>${city.displayName}</h3>
                    <p><strong>Температура:</strong> ${data.main.temp} °C</p>
                    <p><strong>Влажность:</strong> ${data.main.humidity} %</p>
                    <p><strong>Описание:</strong> ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                weatherData.innerHTML = `
                    <h3>${city.displayName}</h3>
                    <p>Ошибка загрузки данных: ${error.message}</p>
                `;
                console.error(`Error fetching current weather data for ${city.name}:`, error);
            });
    });
});
