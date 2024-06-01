import requests
from datetime import datetime, timedelta

def get_weather_for_date(api_key, city, target_date):
    base_url = "http://api.weatherapi.com/v1/history.json"
    params = {
        "key": api_key,
        "q": city,
        "dt": target_date
    }
    response = requests.get(base_url, params=params)
    data = response.json()

    if 'error' in data:
        return data['error']['message']

    return data['forecast']['forecastday'][0]['day']['avgtemp_c']

def main_api():
    api_key = 'f0ec891ae84f4a0dbac93639243105'
    city = 'Petropavlovsk'
    days_before = []

    for i in range(1,5)[::-1]:
        target_date = datetime.now()- timedelta(days=i)
        days_before.append(get_weather_for_date(api_key, city, target_date))

    counter = []
    for i in range(len(days_before)):
        if i != 0:
            counter.append( days_before[i] - days_before[i-1])
    # print(sum(counter))
    # print(len(counter))
    sr = sum(counter)

    return round(sr + days_before[-1],2)

print(main_api())