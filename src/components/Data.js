import React, {Component} from 'react';
import Form from "./Form";
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

