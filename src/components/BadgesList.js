import React from 'react';
import { Link } from 'react-router-dom'
import Gravatar from './Gravatar'
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
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                              <BadgesListItem badge={badge} />
                            </Link>
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

          <Gravatar className="BadgesListItem__avatar" email={props.badge.email} />

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