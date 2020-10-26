import React from 'react';

const Form = () => {
    const handleSubmitWeather = event => {
        event.preventDefault();
const city = event.currentTarget.city.value.trim();


    }
    return (

        <form onSubmit={handleSubmitWeather}>
            <input type="text" name='city' placeholder="city"/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;

// let url = 'api.openweathermap.org/data/2.5/weather?id=295620&units=metric&appid=80757b32e1df3a420cd0076716f3bc36';
// const response = fetch(url).
// then((response) => response.json())
//     .then((response) => {
//         this.setState({items: response});
//     })
//
// console.log(response);