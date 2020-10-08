import React, { Component } from 'react';
import ChuckQuote from "./components/ChuckQuote.jsx";
import './App.css';
import Chuck from './components/images/Chuck.png';

class App extends Component {
  state = {
    quoteData: [],
    tick: 0,
  };

  loadData = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log("data is", data);
    return data;
  }

  handleClick = async () => {
    const quoteData = await this.loadData();
    this.setState({
      quoteData: quoteData.value,
    });
  }

  async componentDidMount() {
    console.log("The component mounted");
    const quoteData = await this.loadData();
    this.setState({
      quoteData: quoteData.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chuck Norris Says.....</h1>
          <div className="Image-Wrapper">
            <img src={Chuck} alt="Chuck Norris" />
          </div>
        </header>
        <div className="sub-content-upper">
            <ChuckQuote quoteData={this.state.quoteData} />
            <button className="button" onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

