import React from 'react';
import './Modal.scss';


interface ModalProps {
    width?: number;
    height?: number;
    children?: any;
}

const Modal = (props: ModalProps) => {
    return(
        <div className='modal-mask'>
            <div className='modal-wrap-container'>
                <div className='modal-window' style={{width: props.width, height: props.height}}>
                    {props.children}
                </div>
            </div>    
        </div>
    );
}

export { Modal };