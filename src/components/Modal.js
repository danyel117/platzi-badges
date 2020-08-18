import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

const Modal = (props) => {
    return ( 
        <React.Fragment>
            {props.isOpen && ReactDOM.createPortal(
                <div className="Modal">
                    <div className="Modal__container">
                        <button onClick={props.onClose} className="Modal__close-button">
                            X
                        </button>
                        {props.children}
                    </div>
                </div>,
            document.getElementById('modal'))}
        </React.Fragment>
     );
}
 
export default Modal;