import React from 'react';
import { Link } from 'react-router-dom'
import './styles/BadgesList.css';
const BadgesList = (props) => {
    return ( 
    <React.Fragment>
      {props.badges.length===0 ? 
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
        </div>
      :
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
      }
    </React.Fragment>
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