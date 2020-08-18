import React from 'react';

import './styles/PageError.css'

const PageError = (props) => {
    return ( 
        // eslint-disable-next-line
        <div className="PageError">
            😨{props.error.message}❌
        </div>
     );
}
 
export default PageError;