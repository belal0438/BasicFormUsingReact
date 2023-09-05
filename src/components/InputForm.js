import React, { useState } from "react";
import "./InputForm.css";
import Error from "./Error";
import Wrapper from "./Helpers/Wrapper";

const InputForm = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  // for Error
  const [error, setError] = useState();

  const UsernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    // now check validation
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // first convert the number to string
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age ( > 0).",
      });
      return;
    }
    const dataObj = {
      id: Math.random().toString(),
      name: inputUsername,
      age: inputAge,
    };
    // console.log(dataObj);
    props.onAddInput(dataObj);

    setInputUsername("");
    setInputAge("");
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
            <input
              type="text"
              value={inputUsername}
              onChange={UsernameChangeHandler}
            />
          </div>
          <div className="form-control-input">
            <label>Age(Year)</label>
            <input type="number" value={inputAge} onChange={AgeChangeHandler} />
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default InputForm;
