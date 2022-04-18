import React from "react";
import TodoItem from "./TodoItem";
export default function TodoSchedule(props){
    
    
    return(
        <div className='todoWrap'>
            {props.todoListValue.map((x)=>{
                return <TodoItem item={x}  deletef={props.deleteAction} changef={props.changeAction}/>
            })}
        </div>
    )
}
