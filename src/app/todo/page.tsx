"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

export default function UiTest() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const getTodos = async () => {
    const res = await axios.get("/api/todo");
    setTodos(res.data.todos);
  };

  const addTodo = async (task: string) => {
    const res = await axios.post("/api/todo", { task, completed: false });
    setTodos([...todos, res.data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleAddTodo = () => {
    addTodo(newTask);
    setNewTask("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Add Todo
      </Button>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Add a new task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Task"
            type="text"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTodo} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <List>
        {todos.map((todo, todoIndex) => (
          <ListItem key={todoIndex} dense button>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{
                "aria-labelledby": `checkbox-list-label-${todo.id}`,
              }}
            />
            <ListItemText
              id={`checkbox-list-label-${todo.id}`}
              primary={todo.task}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
