import React, { useState } from "react";

const AsyncComponent: React.FC = () => {
  const [text, setText] = useState("Initial text");

  const updateText = async () => {
    setText("Loading...");
    setTimeout(() => {
      setText("Updated text");
    }, 2000);
  };

  return (
    <>
      <button onClick={updateText}>Update Text</button>
      <p>{text}</p>
    </>
  );
};

export default AsyncComponent;
