import React, { useState, useRef } from "react";

import "./InputForm.css";
import Error from "./Error";
import Wrapper from "./Helpers/Wrapper";

const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // for Error
  const [error, setError] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enterUserage = ageInputRef.current.value;

    // now check validation
    if (enteredName.trim().length === 0 || enterUserage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // first convert the number to string
    if (+enterUserage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age ( > 0).",
      });
      return;
    }
    const dataObj = {
      id: Math.random().toString(),
      name: enteredName,
      age: enterUserage,
    };
    // console.log(dataObj);
    props.onAddInput(dataObj);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {/* if error hase then */}
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* othervise */}
      <form onSubmit={SubmitHandler}>
        <div className="form-control">
          <div className="form-control-input">
            <label>Username</label>
            <input type="text" ref={nameInputRef} />
          </div>
          <div className="form-control-input">
            <label>Age(Year)</label>
            <input type="number" ref={ageInputRef} />
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default InputForm;
