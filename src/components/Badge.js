import React from 'react';
import confLogo from "../images/badge-header.svg"
import "./styles/Badge.css"
const Badge = () => {
    return ( 
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://s.gravatar.com/avatar/cf13f80b8c3936bb96a999b9fc9c48e6?s=80" alt="Avatar"></img>
                <h1>Daniel <br/> Saldarriaga</h1>
            </div>
            <div className="Badge__section-info">
                <h3>Web Developer</h3>
                <div>@Daniel_Code</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
     );
}
 
export default Badge;