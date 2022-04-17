import './App.css';
import Hcomponent from './Hcomponent';
import React, { useState } from "react";


function App() {
  const [value, setValue] = useState(" "); //current input value
  const[todoList,setTodo] = useState([]); //list of todo items
  const handleInput = event => {
    setValue(event.target.value);
  };

  function addTodo(){
    setTodo([...todoList, {
      id: Date.now(),
      //completed: false,
      title: value
    }])
    
  };
  
  
  return (
    <div className="App">
      <input onChange={handleInput} placeHolder='111222'/>
      <button onClick={addTodo}>PressMe</button>
      <todoItem />
    </div>
  );
}

export default App;
