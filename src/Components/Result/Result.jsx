import React from "react";
import cl from "./Result.module.css";

export const Result = ({ result, restartGame }) => {
  return (
    <div className={cl.container}>
      <h3 className={cl.result}>You scored {result}/5 correct answers</h3>
      <button onClick={() => restartGame()} className={cl.btn}>
        Play again
      </button>
    </div>
  );
};
