import TaskColumn from "./TaskColumn";

const ToDoList = () => {
  const todos = [
    { id: 1, text: "buy milk", status: "to-do" },
    { id: 2, text: "wash bike", status: "in-progress" },
    { id: 3, text: "do the budget", status: "done" },
    { id: 4, text: "call jane", status: "to-do" },
  ];

  return (
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
  );
};

export default ToDoList;
