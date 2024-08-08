import React from "react";
import ToDoList from "./components/ToDoList";
import { Container } from "react-bootstrap";
import { DndContext } from "@dnd-kit/core";

function App() {
  return (
    <Container>
      <ToDoList
        todos={[
          { id: 1, text: "buy milk", status: "to-do" },
          { id: 2, text: "wash bike", status: "in-progress" },
          { id: 3, text: "do the budget", status: "done" },
          { id: 4, text: "call jane", status: "to-do" },
        ]}
      />
    </Container>
  );
}

export default App;
