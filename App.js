import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
 
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setguessRounds] = useState(0)

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  const gameOverHandler = numOfRounds =>{
    setguessRounds(numOfRounds)
  }

  const restartHandler = () =>{
    setguessRounds(0);
    setUserNumber(null)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>
  if(userNumber && guessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }else if(userNumber && guessRounds>0){
    content = <GameOverScreen numOfRounds={guessRounds} userNumber={userNumber} onRestart={restartHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
