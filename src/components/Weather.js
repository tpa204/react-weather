import React from 'react';

const Weather = ({weather,message}) => {
    if (message) {return <div><p>{message}</p></div>}
    else {
    return (
        <div>
            <p>Location:{weather.city}, {weather.country}</p>
            <p>Temperature: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {weather.sunset}</p>
        </div>
    );
}};

export default Weather;