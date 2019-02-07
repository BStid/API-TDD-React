import React, { Component } from "react";
import getAllAmiibos from "./services/getAllAmiibos";
import Image from "./components/Image";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      amiibos: [],
      loading: true
    };
  }

  fetchAmiibo = async () => {
    this.setState({ loading: true, amiibos: [] });
    let amiiboItems = await getAllAmiibos();
    await this.setState({ loading: false, amiibos: amiiboItems });
  };

  componentDidMount() {
    // let items = getAllAmiibos();
    // this.setState({ amiibos: items, loading: false });
    this.fetchAmiibo();
  }

  render() {
    const { amiibos, loading } = this.state;
    console.log(amiibos);
    let displayAmiibos = this.state.amiibos.map((amiibo, index) => {
      return (
        <div className="amiiboContainer">
          <Image key={index} img={amiibo.image} />
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          {loading ? <p>"Loading..."</p> : displayAmiibos}
        </header>
      </div>
    );
  }
}

export default App;
