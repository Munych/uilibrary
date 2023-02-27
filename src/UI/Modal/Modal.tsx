import React from 'react';
import './Modal.scss';
import { Button } from '../Button/Button';


interface ModalProps {
    title?: string;
    style?: object;
    children?: any;
    mask?: boolean;
    open?: boolean;
    onOk?: (event: MouseEvent) => void;
    onCancel?: (event: MouseEvent) => void;
}

const defaultProps: ModalProps = {
    mask: true,
    open: false
}

const Modal = (props: ModalProps) => {
    return(
        <React.Fragment>
            <div className={`modal-wrap-container ${props.open ? 'modal-visible' : 'modal-hidden'}`}>
                <div className='modal-window' style={props.style}>
                    <div className='modal-window-header'>
                        <div>{props.title}</div>
                    </div>
                    <div className='modal-window-content'>
                        {props.children}
                    </div>
                    <div className='modal-window-bottom'>
                        <Button onClick={props.onOk}>Ok</Button>
                        <Button onClick={props.onCancel} type="primary">Cancel</Button>
                    </div>
                </div>
            </div>    
            <div className={`modal-mask ${props.open && props.mask ? 'modal-visible' : 'modal-hidden'}`}></div>
        </React.Fragment>
    );
}

Modal.defaultProps = defaultProps;

export { Modal };