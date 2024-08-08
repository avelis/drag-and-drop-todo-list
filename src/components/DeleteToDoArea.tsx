import { useDroppable } from "@dnd-kit/core";
import React from "react";

const DeleteToDoArea = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "delete-to-do-area",
  });
  const style = {
    backgroundColor: isOver ? "lavender" : undefined,
    minHeight: "150px",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border rounded border-warning w-100 p-5"
    >
      🗑️ Drag Item To Delete
    </div>
  );
};

export default DeleteToDoArea;
