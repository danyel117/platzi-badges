import React from 'react';
import confLogo from "../images/badge-header.svg"
import "./styles/Badge.css"

const Badge = (props) => {
    return ( 
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={props.avatar_url} alt="Avatar"></img>
                <h1>{props.first_name} <br/> {props.last_name}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{props.job_title}</h3>
                <div>{props.twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
     );
}
 
export default Badge;