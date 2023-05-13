import axios from "axios"
import { useState, useEffect } from "react"
const Weather = () =>{
    const [weather, setWeather] = useState({
        temp_c: null,
        city: null,
    })

    useEffect(()=>{
        axios.get('http://api.weatherapi.com/v1/current.json?key=f57ded1f279f4aeaa14102446232101&q=London&aqi=no')
        .then((res)=>{
            console.log(res.data)
            setWeather({
                temp_c: res.data.current.temp_c,
                city: res.data.location.region
            })
        })
    }, [])
console.log(weather)
return(
    <div>
        <h1>Weather</h1>
        <p>{weather.temp_c}C, {weather.city}</p>
    </div>
)
}

export default Weather