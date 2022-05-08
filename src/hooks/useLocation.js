import axios from "axios";
import { useEffect, useState } from "react";

const useLocation = () => {

    const [ weather, setWeather] = useState({})

    useEffect(()=>{

        function success(pos) {
            var crd = pos.coords;
            
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            axios 
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=f0efe9771bb5b2f163ff96cc0c1d55d3`)
            .then( res => setWeather(res.data) )
        }
        
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error);

    }, []);
    return {weather,setWeather}
};

export default useLocation;