import React, { Component } from "react";
import axios from "axios";
import keys from "../Config.json";
import Styles from "./Styles.css";
class Search extends Component {
  state = {
    ciudades: []
  };
  getCiudades = ciudad => {
    if (ciudad) {
      const { access_token, base_url } = keys.maps;
      const complete_url = `${base_url}${ciudad}.json?`;
      axios
        .get(complete_url, {
          params: {
            access_token: access_token,
            autocomplete: true
          }
        })
        .then(response => {
          // console.log(response);
          const ciudades = response.data.features.map(ciudad => {
            return {
              place_id: ciudad.id,
              place_name: ciudad.place_name,
              coordinates: ciudad.center,
              place_type: ciudad.place_type[0]
            };
          });
          this.setState({ ciudades: ciudades });
        });
    }
  };

  render() {
    
    return (
      <div className="Search">
        <div className="InputName">
          <input className = "busqueda" id="busqueda" type="text"></input>
          <div
            className="boton"
            onClick={() =>
              this.getCiudades(document.getElementById("busqueda").value)
            }
          >
            Search
          </div>
        </div>
        {/* className={props.active ? "filter_button_active" : "filter_button"} */}
        <div className="Output">
          {this.state.ciudades.map(ciudad => {
            return (
              <div className = "Mostrar" key={ciudad.place_id} >
                <p onClick={() => this.props.changeCiudad(ciudad.coordinates)}>{ciudad.place_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Search;
