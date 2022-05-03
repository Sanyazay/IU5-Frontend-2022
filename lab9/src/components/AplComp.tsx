import React from "react";
import {AplCompProps} from "../compTypes/Apl.types";
import { SearchMenu } from "./SearchMenu";
import { UserSearch } from "./UserSearch";
export const AplComp :React.FC<AplCompProps> = ({user,idfunc,inputfunc,getBackfunc}) => {

    
    if(user.length === 0){
        return(
            <SearchMenu idfunc={idfunc} inputfunc={inputfunc}/>
        )
    }else{
        return(
            <UserSearch getBackfunc={getBackfunc} user={user}  />
        )
    }
    
    
}
