import React from "react";
import cl from "./BackgroundImages.module.css";

export const BackgroundImages = () => {
  return (
    <div>
      <img className={cl.left} src="../../../public/blob.svg" />
      <img className={cl.right} src="../../../public/blob1.svg" />
    </div>
  );
};
