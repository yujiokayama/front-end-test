"use client";

import React, { useState } from "react";

export default function PlayGround() {
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    const new_count = count + 1;

    setCount(new_count);
    console.log(`count：${new_count}`);
  };

  return (
    <>
      <h1>PlayGround</h1>
      <button onClick={onButtonClick}>押して！</button>
    </>
  );
}
