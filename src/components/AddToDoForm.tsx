import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddToDoForm = ({ onAddToDo }) => {
  const [newToDo, setNewTodo] = useState("");
  const handleAddToDo = (e) => {
    e.preventDefault();
    onAddToDo(newToDo);
    setNewTodo("");
  };
  return (
    <Form className="row row-cols-sm-auto g-2" onSubmit={handleAddToDo}>
      <Form.Group className="col-md-4">
        <Form.Control
          type="text"
          value={newToDo}
          placeholder="add todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="secondary">
        Add task
      </Button>
    </Form>
  );
};

export default AddToDoForm;
