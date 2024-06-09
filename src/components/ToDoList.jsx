import TaskColumn from "./TaskColumn";
import { DndContext } from "@dnd-kit/core";

const ToDoList = ({ todos }) => {
  return (
    <DndContext>
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
