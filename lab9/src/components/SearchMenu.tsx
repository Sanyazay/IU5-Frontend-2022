import React from "react";
import {SearchMenuProps} from "../compTypes/SearchMenu.types";
import gitHubLogo from "../images/gitHub_logo.png"

export const SearchMenu:React.FC<SearchMenuProps>  = ({idfunc,inputfunc}) => {

    
    return(
        <div className='searchMenuWrapF'>
            <img alt='gitHubLogo' src={gitHubLogo} className='gitHubLogo'/>
            <div className='searchMenuWrapS'>
                <input onKeyPress={(e:React.KeyboardEvent<HTMLInputElement>)=>{if(e.code === "Enter"){idfunc()}}} className='searchInput' type="text" onChange={(e)=>{inputfunc(e.target.value)}} />
                <button className='searchButton' onClick={()=>idfunc()}>Search</button>
            </div>
        </div>
    )
}