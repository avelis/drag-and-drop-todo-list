import Card from "./Card";

const TaskColumn = ({ title, todos }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "0 10px 10px 10px",
        margin: "10px",
        minWidth: "300px",
      }}
    >
      <h3>{title}</h3>
      <div>
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
