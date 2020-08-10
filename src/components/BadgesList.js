import React from 'react';

import './styles/BadgesList.css';
const BadgesList = (props) => {
    return ( 
        <div className="BadgesList">
            <ul className="list-unstyled">
                {props.badges.map(badge=>{
                    return(
                        <li key={badge.id}>
                            <BadgesListItem badge={badge} />
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default BadgesList;

const BadgesListItem = (props)=>{

    return(
        <div className="BadgesListItem">
          <img
            className="BadgesListItem__avatar"
            src={props.badge.avatarUrl}
            alt={`${props.badge.first_name} ${props.badge.last_name}`}
          />

          <div>
            <strong>
              {props.badge.first_name} {props.badge.last_name}
            </strong>
            <br />@{props.badge.twitter}
            <br />
            {props.badge.jobTitle}
          </div>
      </div>
    )
}