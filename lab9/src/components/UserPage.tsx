import React from "react";
import { UserPageProps } from "../compTypes/UserPage.types";
export const UserPage :React.FC<UserPageProps> = ({getBackfunc,data}) => {
   
    return(
        <div className="UserPageWrapF">
            <img className='userAvatar' src={data.avatar_url} alt=''/>
            <div className="userPropertiesWrap">
                <div className="userProperties">Login: {data.login}</div>
                <div className="userProperties">Followers: {data.followers}</div>
                <div className="userProperties">Following: {data.following}</div>
                <div className="userProperties">Since: {data.created_at.substr(0,10)}</div>
            </div>
            <button className="backButton" onClick={()=>getBackfunc()}>Back</button>
        </div>
    )
    
    
}