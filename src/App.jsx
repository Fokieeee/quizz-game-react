import { useState, useEffect } from "react";
import { BackgroundImages } from "./Components/BackgroundImages/BackgroundImages";
import { CheckButton } from "./Components/CheckButton/CheckButton";
import { Start } from "./Components/Start/Start";
import { Test } from "./Components/Test/Test";
import { Result } from "./Components/Result/Result";

import { nanoid } from "nanoid";
import produce from "immer";

import "./App.css";

function App() {
  const [tests, setTests] = useState([]);
  const [result, setResult] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    async function getTests() {

      const res = await fetch(
        "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple&encode=base64"
      );
			
      const data = await res.json();
      const decoded = data.results.map((test) => {
        return {
          id: nanoid(),
          question: atob(test.question),
          correct_answer: {
            answer: atob(test.correct_answer),
            id: nanoid(),
            isPressed: false,
            disable: false,
          },
          incorrect_answers: test.incorrect_answers.map((test) => {
            return {
              answer: atob(test),
              id: nanoid(),
              isPressed: false,
              disable: false,
            };
          }),
        };
      });
      for (let i = decoded.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = decoded[i];
        decoded[i] = decoded[j];
        decoded[j] = temp;
      }
      const fiveTests = decoded.splice(0, 5);
      setTests(fiveTests);
    }
    getTests();
  }, []);

  const checkResult = () => {
    setResult(
      tests
        .map((test) => test.correct_answer.isPressed === true)
        .filter((e) => e).length
    );
    setTests(
      produce((draft) => {
        draft.map((test) => {
          test.correct_answer.disable = true;
          test.incorrect_answers.map((answer) => {
            answer.disable = true;
          });
        });
      })
    );
    setGameEnd(true);
  };

  const correctAnswerOnClick = (id) => {
    setTests(
      produce((draft) => {
        draft.map((test) => {
          if (test.correct_answer.id === id) {
            test.correct_answer.isPressed = !test.correct_answer.isPressed;
            test.incorrect_answers.map((answer) => {
              answer.isPressed = false;
            });
          }
        });
      })
    );
  };

  const incorrectAnswerOnClick = ({ answerId, testId }) => {
    setTests(
      produce((draft) => {
        draft.map((test) => {
          if (test.id === testId) {
            test.correct_answer.isPressed = false;
            test.incorrect_answers.map((answer) => {
              if (answer.id === answerId) {
                answer.isPressed = !answer.isPressed;
              } else {
                answer.isPressed = false;
              }
            });
          }
        });
      })
    );
  };

  const mappingTests = tests.map((test) => {
    return (
      <Test
        gameEnd={gameEnd}
        key={test.question}
        test={test}
        correctAnswerOnClick={correctAnswerOnClick}
        incorrectAnswerOnClick={incorrectAnswerOnClick}
      />
    );
  });

  const restartGame = () => window.location.reload();

  return (
    <div className="App">
      <BackgroundImages />
      {!gameStart && mappingTests}
      {gameStart && <Start setGameStart={setGameStart} />}
      {gameEnd && <Result restartGame={restartGame} result={result} />}
      {!gameEnd && !gameStart && (
        <CheckButton checkResult={checkResult} />
      )}
    </div>
  );
}

export default App;
