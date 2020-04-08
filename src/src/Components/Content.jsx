import React, { Component,useState } from "react";
import axios from "axios";
import Search from "./Search.jsx";
import Detail from "./Detail";
import cloneDeep from "clone-deep";

const Content = () => {
  const [coordinates, setCoordinates] = useState(null);
  const changeCiudad = (coordenadas) => {
    setCoordinates(coordenadas);
  }
  return (
    <div>
      <Search changeCiudad={changeCiudad} />
      {coordinates ? <Detail coordinates={coordinates} /> : null}
    </div>
  );
}
// class Content extends Component {
//   state = {
//     coordinates: null
//   };
//   changeCiudad = coordenadas => {
//     let newState = cloneDeep(this.state);
//     newState.coordinates = coordenadas;
//     this.setState(newState);
//   };
//   render() {
//     console.log(this.state.coordinates);
//     return (
//       <div>
//         <Search changeCiudad={this.changeCiudad} />
//         {this.state.coordinates ? <Detail coordinates={this.state.coordinates} /> : null}
//       </div>
//     );
//   }
//   componentDidMount() {}
//   componentDidUpdate() {}
// }
export default Content;
//e6b8571b913292477e7a4794c0f75d78 clave para darksky
