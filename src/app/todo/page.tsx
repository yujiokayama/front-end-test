"use client";

import { useEffect, useRef } from "react";
import axios from "axios";

export default function UiTest() {
  const hasFetched = useRef(false);
  const getTodos = async () => {
    const res = await axios.get("/api/todo");

    console.log(res.data.todos);
  };

  useEffect(() => {
    if (!hasFetched.current) {
      getTodos();
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <h1>Todo</h1>
    </>
  );
}
