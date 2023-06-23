import axios from "axios";
import { useState } from "react";

type wordKey = {
    word: String,
    hint: String,
}

export enum LetterState {
    Miss,
    Present,
    Match
  }

const [word, setWord] = useState<wordKey>();
export let letterLength: number;

export const getRandomWord = () => {
    axios.get("http://localhost:3001/getWSW").then((res) => {
      let data = res.data.data;
      data = data[Math.floor(Math.random()*data.length)]
      data = data as wordKey;
    //   console.log(shed)
      setWord(data);
      

      // console.log("Data Received");
    }).catch(() => {
      alert('Error Received')
    })
    return null;
  }

export const computeGuess = (guess: string, answer: string): LetterState[] => {
    const result: LetterState[] = [];
  
    if (guess.length !== answer.length) {
      return result;
    }
  
    const guessArray = guess.split("");
    const answerArray = answer.split("");
  
    const match = guessArray.map((letter) => ({
      letter: letter,
      state: LetterState.Miss
    }));
  
    for (let i = guessArray.length - 1; i >= 0; i--) {
      if (answer[i] === guessArray[i]) {
        match[i].state = LetterState.Match;
        answerArray.splice(i, 1);
      }
    }
  
    guessArray.forEach((letter, i) => {
      if (answerArray.includes(letter) && match[i].state !== LetterState.Match) {
        match[i].state = LetterState.Present;
        answerArray.splice(answerArray.indexOf(letter), 1);
      }
    });
  
    match.forEach((letter) => {
      result.push(letter.state);
    });
  
    return result;
  };