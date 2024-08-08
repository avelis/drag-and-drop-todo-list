import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddToDoForm from "./AddToDoForm";
import TaskColumn from "./TaskColumn";
import DeleteToDoArea from "./DeleteToDoArea";
import { DndContext } from "@dnd-kit/core";
import { v4 as uuid } from "uuid";

const ToDoList = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);

  const statusMap = {
    Done: "done",
    "In Progress": "in-progress",
    "To Do": "to-do",
  };

  const handleAddTodo = (newTodoText: string) => {
    setTodos([...todos, { id: uuid(), text: newTodoText, status: "to-do" }]);
  };

  const updateTodoStatus = (todoId: any, overId: any) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === todoId) {
          todo.status = statusMap[overId];
        }
        return todo;
      })
    );
  };

  const deleteTodo = (deleteTodoId: any) => {
    setTodos(todos.filter((todo: any) => todo.id !== deleteTodoId));
  };

  const handleDragEnd = ({ over, active }) => {
    if (!over) {
      // if user dropped the task outside any droppable area, return
      return;
    }

    if (over.id === "delete-to-do-area") {
      deleteTodo(active.id);
    } else {
      updateTodoStatus(active.id, over.id);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Row>
        <h1>To Do List</h1>
      </Row>
      <Row>
        <AddToDoForm onAddToDo={handleAddTodo} />
      </Row>
      <Row className="row-cols-3">
        <TaskColumn
          title="To Do"
          todos={todos.filter((todo: any) => todo.status === "to-do")}
        />
        <TaskColumn
          title="In Progress"
          todos={todos.filter((todo: any) => todo.status === "in-progress")}
        />
        <TaskColumn
          title="Done"
          todos={todos.filter((todo: any) => todo.status === "done")}
        />
      </Row>
      <Row>
        <Col className="g-2">
          <DeleteToDoArea />
        </Col>
      </Row>
    </DndContext>
  );
};

export default ToDoList;
