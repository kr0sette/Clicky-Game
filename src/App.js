import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card'
import char from "./characters.json";

console.log(char);



class App extends Component {
//Set State
  state = {
    char,
    score: 0,
    clicked: []
  };

handleShuffle = () => {
  const shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let shuffled = shuffleCards(char);
  this.setState( {char: shuffled});
};

//Renders components to page
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
        {char.map (char => (
        <Card 
          key={char.id}
          id={char.id}
          image={char.image}
          handleShuffle = {this.handleShuffle}
          />
          ))}
      </Wrapper>
    );
  }
}



export default App;
