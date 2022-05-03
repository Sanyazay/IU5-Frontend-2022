import React, { useState, useEffect } from "react";
import { LoadComp } from "./LoadComp";
import {UserSearchProps} from "../compTypes/UserSearch.types";
import { UserPage } from "./UserPage";
import { ErrorMenu } from "./ErrorComp";

export const UserSearch:React.FC<UserSearchProps>  = ({user,getBackfunc}) => {
    const[errorСondition,setError] = useState(false);
    const[loadingCondition,setLoading] = useState(true);
    const[userData ,setUserData] = useState<any>();
    
    
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}` , {
            method: 'GET',
            headers: {
              Authorization: `token ${process.env.REACT_APP_TOKEN}`,
            },
          }).then((data)=>{
            if(data.status !== 200 ){
                setError(true);
                
            }else{
                
                return data.json();
            }}).then((data) =>{
                setUserData(data);
                setLoading(false);
                
            })
            },[user]);

    
    if(errorСondition){
        return(
            
            <ErrorMenu getBackfunc={getBackfunc}/>
            
        )
    }
    if(loadingCondition){
        
        return(
            <LoadComp/>
        )
    }else{
        
        return(
            
            <UserPage data={userData} getBackfunc={getBackfunc}/>
        )
    }
    
    
}