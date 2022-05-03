import React from "react";
import {ErrorCompProps} from "../compTypes/ErrorComp.types";
import gitHubLogoError from "../images/gitHub_logoError.png"

export const ErrorMenu:React.FC<ErrorCompProps>  = ({getBackfunc}) => {

    
    return(
        <div className='searchMenuWrapF'>
            <img alt='gitHubLogo' src={gitHubLogoError} className='gitHubLogo'/>
            
            <button className="errorBackButton" onClick={()=>getBackfunc()}>Back</button>
            
        </div>
    )
}