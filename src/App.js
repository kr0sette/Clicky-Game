import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card'
import char from "./characters.json";

console.log(char);

class App extends Component {

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
        {char.map( char => (
        <Card 
          id={char.id}
          image={char.image}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
