import React from "react";

export default function Hcomponent(props){
    
    
    return(
        <div>
            <div>Добавить</div>
            <input type='text' />
            <button onClick={props.addItem} >добавить</button>
        </div>
    )
}
