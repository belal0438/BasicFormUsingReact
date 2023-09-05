import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import InputList from "./components/InputList";

function App() {
  const [userList, setUserList] = useState([]);

  const AddInputToList = (data) => {
    setUserList((prevdata) => {
      return [...prevdata, data];
    });
  };

  return (
    <div className="App">
      <InputForm onAddInput={AddInputToList} />
      <InputList userData={userList} />
    </div>
  );
}

export default App;
