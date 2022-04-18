import './App.css';
import TodoSchedule from './TodoSchedule';
import React, { useState } from "react";


function App() {
  const [value, setValue] = useState(" ");
  const[todoList,setTodo] = useState([]);
  const handleInput = event => {
    setValue(event.target.value);
  };

  function addTodo(){
    if(value !==''){
      setTodo([...todoList, {
        id: Date.now(),
        title: value
      }]);
    }
    
    
  };
  function deleteTodo(id){
    setTodo(todoList.filter((elem)=>elem.id !== id))
    console.log(id)
    console.log(todoList)
    
  };
  
  return (
    <div className="App">
      <div className='superMainWrap'>
        <div className='mainWrap'>
          <input onChange={handleInput} className='mainInput' />
          <button className='addButton' onClick={addTodo}>ADD</button>
        </div>
        <TodoSchedule todoListValue={todoList} deleteAction={deleteTodo}  />
      </div>
    </div>
  );
}

export default App;
