import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const ToDoList = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  const handleDragEnd = ({ active, over }) => {
    const draggedTodoId = active.id;
    const droppedColumnTitle = over.id;

    const statusByColumn = {
      "To do": "to-do",
      "In progress": "in-progress",
      Done: "done",
    };

    setTodos(
      todos.map((todo) => {
        if (todo.id === draggedTodoId) {
          return {
            ...todo,
            status: statusByColumn[droppedColumnTitle],
          };
        } else {
          return todo;
        }
      })
    );
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    // add the todo
    setTodos([
      ...todos,
      {
        id: uuid,
        text: newTodoText,
        status: "to-do",
      },
    ]);
    // clear the input
    setNewTodoText("");
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h2 style={{ marginLeft: "10px" }}>To do list</h2>
      <form
        onSubmit={handleAddTodo}
        style={{ margin: "10px", display: "flex", gap: "10px" }}
      >
        <input
          type="text"
          name="newTodoText"
          placeholder="type in your todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TaskColumn
          title="To do"
          todos={todos.filter((t) => t.status === "to-do")}
        />
        <TaskColumn
          title="In progress"
          todos={todos.filter((t) => t.status === "in-progress")}
        />
        <TaskColumn
          title="Done"
          todos={todos.filter((t) => t.status === "done")}
        />
      </div>
    </DndContext>
  );
};

export default ToDoList;
