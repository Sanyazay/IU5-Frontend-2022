import React, { useState } from "react";
export default function TodoItem({item,deletef,changef}){
   
    const[cross,setCross] = useState(['inputTask']);
    
    
    function changeClass(){
        if(cross.length === 1){
            setCross([...cross,'crossed'])
        }else{
            setCross(['inputTask'])
        };
        
        
    }
    return(
        <div >
            <input type='checkbox' onChange={()=>{changeClass()}} className='checkBox' />
            <input type='text' value={item.title} onChange={(e)=>changef(item.id,e.target.value)}  className={cross.join(' ')}/>
            <button onClick={()=>{deletef(item.id)}} className='delButton'>DEL</button>
        </div>
    )
}
