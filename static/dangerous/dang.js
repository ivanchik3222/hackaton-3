document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '1f67070b9a5e105654471343e7e0729c'; // Замените на ваш ключ API
    const cities = [
        { name: 'Петропавловск', lat: 54.8755, lon: 69.1628 },
        { name: 'Тайынша', lat: 54.8544, lon: 69.1331 },
        { name: 'Мамлютка', lat: 55.2797, lon: 69.0844 },
        { name: 'Айыртау', lat: 55.1781, lon: 69.2272 },
        { name: 'Антоновка', lat: 55.3144, lon: 68.7267 },
        { name: 'Бесколь', lat: 54.9992, lon: 69.0236 },
        { name: 'Булаево', lat: 54.9192, lon: 70.3197 },
        { name: 'Дмитриевка', lat: 55.6058, lon: 69.2031 },
        { name: 'Казанка', lat: 55.3708, lon: 68.8572 },
        { name: 'Кишкенеколь', lat: 54.6122, lon: 69.5019 }
    ];

    const dangerZonesDiv = document.getElementById('danger-zones-sko');

    cities.forEach(city => {
        // Получение данных о погоде
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                // Формирование информации о погоде
                let weatherInfo = `Температура: ${data.main.temp}°C, Скорость ветра: ${data.wind.speed} м/с. `;

                // Проверка условий и формирование предупреждения
                let warningText = '';
                if (data.main.temp > 30) {
                    warningText += 'ПРЕДУПРЕЖДЕНИЕ: Будьте аккуратны на улице, слишком высокая температура! Желательно оставаться дома. ';
                }
                if (data.wind.speed > 30) {
                    warningText += 'ПРЕДУПРЕЖДЕНИЕ: На улице слишком высокий ветер! Желательно оставаться дома. ';
                }

                // Создание карточки с информацией о погоде
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('weather-card');

                const cityHeader = document.createElement('h3');
                cityHeader.textContent = city.name;
                cardDiv.appendChild(cityHeader);

                const weatherInfoDiv = document.createElement('p');
                weatherInfoDiv.textContent = weatherInfo;
                cardDiv.appendChild(weatherInfoDiv);

                if (warningText) {
                    const warningDiv = document.createElement('p');
                    warningDiv.textContent = warningText;
                    warningDiv.classList.add('warning');
                    cardDiv.appendChild(warningDiv);
                }

                dangerZonesDiv.appendChild(cardDiv);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });
});
