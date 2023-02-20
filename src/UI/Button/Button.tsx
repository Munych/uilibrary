import React from 'react';
import './Button.scss';

enum Types {
    'primary' = 'primary',
    'default' = 'default',
    'dashed' = 'dashed',
    'text' = 'text',
    'link' = 'link'   
}

interface ButtonProps {
    type?: string;
    children?: any;
    style?: object;
    onClick?: (event: MouseEvent) => void;
}

const Button = (props: ButtonProps) => {
    console.log(props);

    return (
        <button onClick={props.onClick} style={props.style} className={`${Types[props.type] || 'default'}-button`}>
            {props.children}
        </button>
    )
}
 
export { Button };