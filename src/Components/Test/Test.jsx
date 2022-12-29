import React, { useEffect, useState } from "react";
import cl from "./Test.module.css";

export const Test = ({
  test,
  correctAnswerOnClick,
  incorrectAnswerOnClick,
  gameEnd,
}) => {
  const [randomNum, setRandomNum] = useState(Math.ceil(Math.random() * 4));
  return (
    <div className={cl.test}>
      <h2 className={cl.question}>{test.question}</h2>
      <button
        disabled={test.correct_answer.disable}
        className={cl.answer}
        style={{
          gridColumn: randomNum,
          background: gameEnd
            ? "#94D7A2"
            : test.correct_answer.isPressed
            ? "#D6DBF5"
            : "#F5F7FB",
        }}
        onClick={() => correctAnswerOnClick(test.correct_answer.id)}
      >
        {test.correct_answer.answer}
      </button>
      {test.incorrect_answers.map((item) => {
        return (
          <button
            disabled={item.disable}
            style={{
              background:
                gameEnd === true && item.isPressed === true
                  ? "#F8BCBC"
                  : item.isPressed
                  ? "#D6DBF5"
                  : "#F5F7FB",
            }}
            key={item.id}
            className={cl.answer}
            onClick={() =>
              incorrectAnswerOnClick({ answerId: item.id, testId: test.id })
            }
          >
            {item.answer}
          </button>
        );
      })}
      <hr className={cl.hr} />
    </div>
  );
};
