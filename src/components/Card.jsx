import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import EditableCard from "./EditableCard";

const Card = ({ todo, onChange }) => {
  const [isEditable, setIsEditable] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: todo.id,
  });
  if (isEditable) {
    const handleSubmit = (updatedTodo) => {
      onChange(updatedTodo);
      setIsEditable(false);
    };
    return <EditableCard todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        margin: "5px 0",
        backgroundColor: "lightblue",
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
      }}
    >
      <div onClick={() => setIsEditable(true)} data-no-dnd="true">
        {todo.text}
      </div>
    </div>
  );
};

export default Card;

// import { useState } from "react";

// const Card = ({ todo, onChange }) => {

//   return (
//     <div

//       style={{
//         border: "1px solid lightgray",
//         padding: "10px",
//         margin: "5px 0",
//       }}
//     >
//       {todo.text}
//     </div>
//   );
// };

// export default Card;
