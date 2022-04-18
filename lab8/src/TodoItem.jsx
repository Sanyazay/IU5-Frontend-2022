import React, { useState } from "react";
export default function TodoItem(props){
    const[inputValue,setInputValue] = useState(props.title);
    const[cross,setCross] = useState(['inputTask']);
    
    
    function changeClass(){
        if(cross.length === 1){
            setCross([...cross,'crossed'])
        }else{
            setCross(['inputTask'])
        }
        console.log(props.uniqKey)
        
    }
    return(
        <div >
            <input type='checkbox' onChange={()=>{changeClass()}} className='checkBox' />
            <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  className={cross.join(' ')}/>
            <button onClick={()=>{props.delete(props.uniqKey)}} className='delButton'>DEL</button>
        </div>
    )
}