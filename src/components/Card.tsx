import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDraggable } from "@dnd-kit/core";

const Card = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <ListGroup.Item
      variant="light"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </ListGroup.Item>
  );
};

export default Card;
