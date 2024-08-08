import React from "react";
import { ListGroup, Col } from "react-bootstrap";
import Card from "./Card";
import { useDroppable } from "@dnd-kit/core";

const TaskColumn = ({ title, todos }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
  });

  const style = {
    backgroundColor: isOver ? "lavender" : undefined,
    minHeight: "200px",
  };

  return (
    <Col
      ref={setNodeRef}
      style={style}
      className="me-2 mt-2 mb-2 border rounded"
      md={3}
    >
      <h3>{title}</h3>
      <ListGroup>
        {todos.map((todo: any) => (
          <Card key={todo.id} id={todo.id}>
            {todo.text}
          </Card>
        ))}
      </ListGroup>
    </Col>
  );
};

export default TaskColumn;
