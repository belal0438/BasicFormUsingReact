import React from "react";
import "./InputList.css";

const InputList = (props) => {
  return (
    <>
      <ul className="form-list">
        {/* <li> List1!!!!!!!!!!!!!!!</li> */}
        {props.userData.map((data) => (
          <li key={data.id}>
            {data.name} ({data.age}) year old
          </li>
        ))}
      </ul>
    </>
  );
};

export default InputList;
