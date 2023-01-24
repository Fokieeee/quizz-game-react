import React from "react";
import cl from "./BackgroundImages.module.css";

export const BackgroundImages = () => {
  return (
    <div>
      <img
        className={cl.left}
        src="./src/Components/BackgroundImages/images/blob.svg"
      />
      <img
        className={cl.right}
        src="./src/Components/BackgroundImages//images/blob1.svg"
      />
    </div>
  );
};
