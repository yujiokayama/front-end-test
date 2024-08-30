"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

export default function UiTest() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const hasFetched = useRef(false);

  const getTodos = async () => {
    const res = await axios.get("/api/todo");
    setTodos(res.data.todos);
  };

  const addTodo = async (task: string) => {
    const res = await axios.post("/api/todo", { task, completed: false });
    setTodos([...todos, res.data]);
  };

  const handleAddTodo = () => {
    addTodo(newTask);
    setNewTask("");
    setIsModalOpen(false);
  };

  const updateTodo = async (id: number, task: string, completed: boolean) => {
    const res = await axios.put(`/api/todo/${id}`, { task, completed });

    setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
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
      <ul>
        {todos.map((todo, todoIndex) => (
          <li key={todoIndex}>{todo.task}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setIsModalOpen(true)}>Add Todo</button>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>New Task</h2>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={handleAddTodo}>Add</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
