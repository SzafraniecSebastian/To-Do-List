import React from "react";
import classes from "./ToDoList.module.css";

const ToDoList = ({ todos, deleteToDo, completeToDo, editToDo, saveToDo }) => {
  return (
    <ul>
      {todos.map(oneToDo => {
        const { id, name, complete, isEdited } = oneToDo;
        // let classParagraph = [classes.notComplete];
        // if (complete) {
        //   classParagraph = [classes.complete];
        // }

        // let completeButton = (
        //   <button onClick={() => completeToDo(id)}>Complete</button>
        // );
        // if (complete) {
        //   completeButton = (
        //     <button onClick={() => completeToDo(id)}>notComplete</button>
        //   );
        // }

        return (
          <li key={id} className={classes.listElements}>
            <div className={classes.liLeftContent}>
              {isEdited ? (
                <form
                  onSubmit={e => saveToDo(id, e)}
                  className={classes.isEditingForm}
                >
                  <input
                    type="text"
                    name="editToDoInput"
                    className={classes.editingInput}
                    placeholder="type new task"
                  />
                  <button type="submit" className={classes.saveButton}>
                    Save
                  </button>
                </form>
              ) : (
                <p
                  className={complete ? classes.complete : classes.notComplete}
                  // style={{ textDecoration: complete ? "line-through" : "none" }}
                >
                  {name}
                </p>
              )}
              {complete ? (
                <button
                  onClick={() => completeToDo(id)}
                  className={classes.buttons}
                >
                  Not Complete
                </button>
              ) : (
                <button
                  onClick={() => completeToDo(id)}
                  className={classes.buttons}
                >
                  Complete
                </button>
              )}
              {isEdited ? (
                <button
                  onClick={() => editToDo(id)}
                  className={classes.buttons}
                >
                  Stop Edit
                </button>
              ) : (
                <button
                  onClick={() => editToDo(id)}
                  className={classes.buttons}
                >
                  Edit
                </button>
              )}
            </div>

            <div>
              <button
                onClick={() => deleteToDo(id)}
                className={classes.deleteButton}
              >
                <div className={classes.mdiv1}>
                  <div className={classes.mdiv}>
                    <div className={classes.md}></div>
                  </div>
                </div>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
