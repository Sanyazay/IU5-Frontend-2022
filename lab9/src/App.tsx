import React, { useState } from "react";
import {AplComp} from "./components/AplComp";
import "./App.css";

export const App = () => {
    const[currentUser,setUser] = useState("");
    const[currentInput,setInput] = useState("")
    
    function getInputText(id : string){
        setInput(()=>id)
        
    }
    function getUserId(){
        setUser(()=>currentInput.trim())
        
    }
    function getBack(){
        setUser(()=>"")
        setInput(()=>"")
    }
    return (
        
        <AplComp user={currentUser} idfunc={getUserId} inputfunc={getInputText} getBackfunc={getBack}/>
        
    );
};
