import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// imort styled from "styled-components";

// const FormControl = styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${(props) => (props.nvalid ? "#ff6666" : "#black")};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${(props) => (props.nvalid ? "#red" : "#cccc")};
//   background: ${(props) => (props.nvalid ? "#ff6666" : "#transparent")};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec00;
//   border-color: #8b005d;
// }

// }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //reset functionality
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // we need to check whether something valid was enterd or not / feedback too
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return; // cant add empty goal
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>To Do :</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
