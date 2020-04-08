import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import keys from "../Config.json";

const Detail = (props) => {
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const getWeather = () => {
    const url = `${keys.darksky.proxy}${keys.darksky.url}${
      keys.darksky.api_key
    }/${props.coordinates[1] /*latitud*/},${
      //no se si tengo que cambiar esto o no
      props.coordinates[0] /*longitud*/
    }?lang=es`;
    axios.get(url).then((response) => {
      console.log(response);
      // this.setState({
      //   weather: response.data,
      // });
      setCoordinates(props.coordinates);
      setWeather(response.data);
    });
  };
  useEffect(() => {
    getWeather();
    return () => {};
  }, [props.coordinates]);

  if (
    !weather ||
    (coordinates[0] !== props.coordinates[0] &&
      coordinates[1] !== props.coordinates[1])
  ) {
    <div>Loading...</div>;
  }

  return (
    <div>
      {weather === null ? null : (
        <div className="MuestraDatos">
          <p>Temperatura: {weather.currently.temperature} ºF</p>
          <p>Humedad: {weather.currently.humidity * 100} %</p>
          <p>
            Probabilidad Precipitaciones:{" "}
            {weather.currently.precipProbability * 100} %
          </p>
        </div>
      )}
    </div>
  );
};
// class Detail extends Component {
//   state = {
//     weather: null
//   };
//   getWeather = () => {
//     const url = `${keys.darksky.proxy}${keys.darksky.url}${
//       keys.darksky.api_key
//     }/${this.props.coordinates[1] /*latitud*/},${
//       this.props.coordinates[0] /*longitud*/
//     }?lang=es`;
//     axios.get(url).then(response => {
//       console.log(response);
//       this.setState({

//         weather: response.data
//       });
//     });
//   };
//   render() {

//     return (
//       <div>
//         {this.state.weather === null ? null : (
//           <div className="MuestraDatos">
//             <p>Temperatura: {this.state.weather.currently.temperature} ºF</p>
//             <p>Humedad: {this.state.weather.currently.humidity * 100} %</p>
//             <p>
//               Probabilidad Precipitaciones:{" "}
//               {this.state.weather.currently.precipProbability * 100} %
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   }
//   componentDidUpdate() {
//     if (
//       !this.state.data ||
//       this.state.data.place_id !== this.props.data.place_id
//     ) {
//       this.getWeather();
//     }
//   }
//   componentDidMount() {
//     this.getWeather();
//   }
// }
export default Detail;
