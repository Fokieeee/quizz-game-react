import React from "react";
import cl from "./Start.module.css";

export const Start = ({ setGameStart }) => {
  return (
    <div className={cl.start}>
      <h1 className={cl.title}>Quizz Game</h1>
      <h3 className={cl.description}>Answer some questions and have fun!!!</h3>
      <button onClick={() => setGameStart(false)} className={cl.btn}>
        Start Game
      </button>
    </div>
  );
};
