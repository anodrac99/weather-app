import React, {useState} from 'react';
import useLocation from '../hooks/useLocation';


const Weather = () => {

    const {weather}=useLocation();
    const [ degrees, setDegrees] = useState(true);
    let tempeture = Math.round((((weather.main?.temp)-273.15)*(9/5)+32));
    const changeTempeture = () => setDegrees(!degrees); 


    

    return (
        <div className='container'>
            <div className='card'>
                <h1>Weather App</h1>
                <h3>{weather.name}, {weather.sys?.country}</h3>
                <div className='card-info'>
                    <div className='card-info1'>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt=''/>
                        <p> <b>{degrees ? tempeture : Math.round(((tempeture - 32) / (1.8)))} {degrees ? "°F" : "°C"}</b> </p>
                    </div>
                    <div className='card-list'>
                        <ul>
                            <li>{weather.weather?.[0].description}</li>
                            <li> <i className="fa-solid fa-wind"></i> <b>Wind speed:</b> {weather.wind?.speed}m/s</li>
                            <li> <i className="fa-solid fa-cloud"></i> <b>Clouds:</b> {weather.clouds?.all}%</li>
                            <li> <i className="fa-solid fa-temperature-half"></i> <b>Pressure:</b> {weather.main?.pressure}mb</li>
                        </ul>
                    </div>
                </div>
                <button onClick={changeTempeture}> Degrees °F/°C</button>
            </div>
        </div>
    );
};

export default Weather;