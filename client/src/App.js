import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    response: '',
    movie :''
  };

  componentDidMount() {
    console.log('ComponentDidMount');
    this.callApi()
      .then(
        res => this.setState({ response: res.name+ ' '+res.express })
      )
      .catch(err => console.log(err));
      fetch('http://facebook.github.io/react-native/movies.json').
      then((Response)=>Response.json()).
      then((findresponse)=>
      {
          console.log(findresponse);
          this.setState({
            movie: findresponse.title
          })
      })
  }
  constructor(){
    super();
    console.log('constructor is called.');
    console.log('constructor called again')
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React JS</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <p className="App-intro">{this.state.movie}</p>
      </div>
    );
  }
}

export default App;