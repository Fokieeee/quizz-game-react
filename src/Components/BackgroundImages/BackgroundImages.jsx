import React from "react";
import cl from "./BackgroundImages.module.css";

export const BackgroundImages = () => {
  return (
    <div>
      <img className={cl.left} src="blob.svg" />
      <img className={cl.right} src="blob1.svg" />
    </div>
  );
};
