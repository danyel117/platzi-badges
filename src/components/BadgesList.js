import React from 'react';


const BadgesList = (props) => {
    return ( 
    <ul className="list-unstyled">
        {props.badges.map(badge=>{
            return(
                <li key={badge.id}>
                    <p>{badge.first_name}</p>
                </li>
            )
        })}
    </ul>
     );
}
 
export default BadgesList;