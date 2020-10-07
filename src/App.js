import React, { useState } from "react";
import AddToDoForm from "./components/InputForm/InputForm";
import ToDoList from "./components/components/ToDoList/ToDoList";
import classes from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addToDo = e => {
    e.preventDefault();
    const toDoNameInputValue = e.target.toDoNameInput.value;
    const toDoId = uuidv4();
    const newToDo = {
      id: toDoId,
      name: toDoNameInputValue,
      complete: false,
      isEdited: false
    };
    setTodos([...todos, newToDo]);
    e.target.reset();
  };

  const deleteToDo = id => {
    const filteredToDoList = todos.filter(oneToDo => {
      return oneToDo.id !== id;
    });
    setTodos([...filteredToDoList]);
  };

  const completeToDo = id => {
    const mapedToDoList = todos.map(oneToDo => {
      if (id === oneToDo.id) {
        oneToDo.complete = !oneToDo.complete;
      }
      return oneToDo;
    });
    setTodos([...mapedToDoList]);
  };

  const editToDo = id => {
    const mapedToDoList = todos.map(oneToDo => {
      if (id === oneToDo.id) {
        oneToDo.isEdited = !oneToDo.isEdited;
      }
      return oneToDo;
    });
    setTodos([...mapedToDoList]);
  };

  const saveToDo = (id, e) => {
    e.preventDefault();
    const editToDoValue = e.target.editToDoInput.value;
    const mapedToDoList = todos.map(oneToDo => {
      if (id === oneToDo.id) {
        oneToDo.name = editToDoValue;
        oneToDo.isEdited = false;
      }
      return oneToDo;
    });
    setTodos([...mapedToDoList]);
  };

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.contentWrapper}>
        <AddToDoForm addToDo={addToDo} />
        <ToDoList
          todos={todos}
          deleteToDo={deleteToDo}
          completeToDo={completeToDo}
          editToDo={editToDo}
          saveToDo={saveToDo}
        />
      </div>
    </div>
  );
};

export default App;
