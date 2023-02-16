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
}

const Button = (props: ButtonProps) => {
    console.log(props);

    return (
        <button className={`${Types[props.type] || 'default'}-button`}>
            {props.children}
        </button>
    ) 
}

export { Button };