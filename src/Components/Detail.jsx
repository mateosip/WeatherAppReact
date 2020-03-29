import React, { Component } from "react";
import axios from "axios";
import keys from "../Config.json";

class Detail extends Component {
  state = {
    weather: null
  };
  getWeather = () => {
    const url = `${keys.darksky.proxy}${keys.darksky.url}${
      keys.darksky.api_key
    }/${this.props.coordinates[1] /*latitud*/},${
      this.props.coordinates[0] /*longitud*/
    }?lang=es`;
    axios.get(url).then(response => {
      console.log(response);
      this.setState({

        weather: response.data
      });
    });
  };
  render() {

    return (
      <div>
        {this.state.weather === null ? null : (
          <div className="MuestraDatos">
            <p>Temperatura: {this.state.weather.currently.temperature} ºF</p>
            <p>Humedad: {this.state.weather.currently.humidity * 100} %</p>
            <p>
              Probabilidad Precipitaciones:{" "}
              {this.state.weather.currently.precipProbability * 100} %
            </p>
          </div>
        )}
      </div>
    );
  }
  componentDidUpdate() {
    if (
      !this.state.data ||
      this.state.data.place_id !== this.props.data.place_id
    ) {
      this.getWeather();
    }
  }
  componentDidMount() {
    this.getWeather();
  }
}
export default Detail;
