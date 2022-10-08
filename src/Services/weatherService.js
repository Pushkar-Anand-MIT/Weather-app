
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams)=>{
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    console.log(url);
    
    return fetch(url)
    .then((res)=>res.json())

    
};




// const getFormattedWeatherData = (searchParams) =>{
//     const formattedCurrentWeather = await getFormattedWeatherData('weather',searchParams);
// }
