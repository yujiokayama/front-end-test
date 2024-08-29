import { NextResponse } from "next/server";

let todos = [
  { id: 1, task: "Learn Next.js", completed: false },
  { id: 2, task: "Build a todo app", completed: false },
];

// GET /api/todo
export async function GET() {
  return NextResponse.json({ todos });
}

// POST /api/todo
export async function POST(request: Request) {
  const body = await request.json();
  const newTodo = { id: todos.length + 1, ...body };
  todos.push(newTodo);
  return NextResponse.json(newTodo);
}

// PUT /api/todo/:id
export async function PUT(request: Request) {
  const body = await request.json();
  const { id } = body;
  todos = todos.map((todo) => (todo.id === id ? { ...todo, ...body } : todo));
  return NextResponse.json(todos.find((todo) => todo.id === id));
}

// DELETE /api/todo/:id
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "0", 10);
  todos = todos.filter((todo) => todo.id !== id);
  return NextResponse.json({ id });
}
