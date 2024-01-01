
const options = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': 'c132ff1e5dmsh9022b5f6bc56932p197a07jsn81db996bbead',
        'X-RapidAPI-Key': '63febd5bd8msh51170b5a322c8a5p1c4e83jsn8f19fe7bc9c0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err))
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("kolkata")
//const url = 'https://open-weather13.p.rapidapi.com/city/landon';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c132ff1e5dmsh9022b5f6bc56932p197a07jsn81db996bbead',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }