import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

const ToDoList = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <DndContext onDragEnd={handleDragEnd}>
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
