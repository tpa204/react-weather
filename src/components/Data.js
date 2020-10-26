import React, {Component} from 'react';
import Form from "./FormControl";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/Constants";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Enter city name'
            }
        }



    getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => this.setState({
                weatherInfo: {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                },
                message:null
            })).catch(e=> {
            console.log(e.message);
            this.setState({weatherInfo:null,
                message: 'Enter correct city name'})
        });
    }


    render() {
        return (
            <div>
          <Form getWeather={this.getWeather}/>
          <Weather weather={this.state.weatherInfo} message={this.state.message}/>
            </div>
        );
    }
}

export default Data;
// getWeather = async (city) => {
//     try {
//         const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
//         if (response.ok) {
//             const data = await response.json();
//             const weatherInfo = {
//                 city: data.name,
//                 country: data.sys.country,
//                 temp: data.main.temp,
//                 pressure: data.main.pressure,
//                 sunset: data.sys.sunset
//             };
//             this.setState({
//                 weatherInfo,
//                 message: null
//             });
//         } else {
//             throw new Error('' + response.status);
//         }
//
//     } catch (e) {
//         console.log(e.message);
//         this.setState({
//             weatherInfo: null,
//             message: 'Enter correct city name'
//         });
//     }
// }
