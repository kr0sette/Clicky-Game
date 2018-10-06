import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card'
import char from "./characters.json";

// console.log(char);


class App extends Component {
//Set State
  state = {
    char,
    score: 0,
    gamesWon: 0,
    clicked: []
  };
  

  //Function that dictates what happens when a card is clicked
  handleClick = (id) => {
    //Check to see if the clicked image is already in the clicked array
    //If it is not clicked yet
    if (this.state.clicked.indexOf(id) === -1){
      //Increase score by 1
      let newScore = this.state.score + 1;
      //Check to see if the score is equal to 12
      //If score = 12
      if (newScore === 12) {
        //send "You Win" message
        alert("Congrats, you win!")
        //increase games won score
        let newGamesWon = this.state.gamesWon + 1;
        this.setState({
          gamesWon: newGamesWon
        });
        //reset game
        this.handleReset();
      }
      //If score <> 12
      else{
        //send "You Guess Correctly" message
        alert("You guessed correctly!")
        this.setState({
          //increase state.score
          score: newScore,
          clicked: this.state.clicked.concat(id)
        //add selected card to Clicked array
        });
        console.log(this.state.clicked);
        //shuffle cards
        this.handleShuffle();
      }
    }
    //If it is clicked already
    else {
      //send "You Lose" Message
      alert("You guessed incorrectly!  Start again.");
      //reset game
      this.handleReset();
    }
    
  };//END handleClick

  //Function that handles reseting game
  handleReset = () => {
    this.setState ({
      score: 0,
      clicked:[]
    });
    this.handleShuffle();
  };//END handleReset


  //Function that shuffles the cards
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
  };//END handleShuffle



//Renders components to page
  render() {
    return (
      <Wrapper>
        <NavBar 
          score = {this.state.score}
          gamesWon = {this.state.gamesWon}
        />
        <Jumbotron />
        {char.map (char => (
          <Card 
            key={char.id}
            id={char.id}
            image={char.image}
            handleClick = {this.handleClick}
            />
          ))}
      </Wrapper>
    );
  }//END Render


}



export default App;
