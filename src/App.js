import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Game from './components/Game'


class App extends Component {

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
        <Game />
      </Wrapper>
    );
  }
}

export default App;
