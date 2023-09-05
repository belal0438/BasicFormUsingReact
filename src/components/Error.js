import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <>
      {/* props.onConfirm these is beacuse when someone click out side of the error div then it also getback to form page */}
      <div className="backdrop" onClick={props.onConfirm}></div>
      <div className="error">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button onClick={props.onConfirm}>Okey</button>
        </footer>
      </div>
    </>
  );
};

export default Error;
