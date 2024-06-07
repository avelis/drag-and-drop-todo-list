import { useState } from "react";
import EditableCard from "./EditableCard";

const Card = ({ todo, onChange }) => {
  const [isEditable, setIsEditable] = useState(false);
  if (isEditable) {
    const handleSubmit = (updatedTodo) => {
      onChange(updatedTodo);
      setIsEditable(false);
    };
    return <EditableCard todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div
      onClick={() => setIsEditable(true)}
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        margin: "5px 0",
      }}
    >
      {todo.text}
    </div>
  );
};

export default Card;
