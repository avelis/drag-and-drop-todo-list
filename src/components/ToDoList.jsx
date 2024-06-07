import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import TaskColumn from "./TaskColumn";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "buy milk", status: "to-do" },
    { id: 2, text: "wash bike", status: "in-progress" },
    { id: 3, text: "do the budget", status: "done" },
    { id: 4, text: "call jane", status: "to-do" },
  ]);

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
