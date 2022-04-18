import React from "react";
import TodoItem from "./TodoItem";
export default function TodoSchedule(props){
    
    
    return(
        <div className='todoWrap'>
            {props.todoListValue.map((x)=>{
                return <TodoItem title={x.title} uniqKey={x.id}  delete={props.deleteAction}/>
            })}
        </div>
    )
}
