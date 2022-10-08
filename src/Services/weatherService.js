const API_KEY = "7d9867cb339a33a11fc742451ac1e0d9";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams)=>{
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res)=>res.json())
};


