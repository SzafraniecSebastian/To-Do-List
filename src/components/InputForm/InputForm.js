import React from "react";
import classes from "./InputForm.module.css";

const AddToDoForm = ({ addToDo }) => {
  return (
    <form onSubmit={addToDo} className={classes.inputForm}>
      <input
        type="text"
        name="toDoNameInput"
        placeholder="type your to do"
        className={classes.newToDoInput}
      />
      <button type="submit" className={classes.addToDoButton}>
        <div className={classes.mdiv1}>
          <div className={classes.mdiv}>
            <div className={classes.md}></div>
          </div>
        </div>
      </button>
    </form>
  );
};

export default AddToDoForm;
