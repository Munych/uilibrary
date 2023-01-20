import React from 'react';
import './Button.scss';

enum Color {
    blue = '#3182ce'
}

interface ButtonProps {
    text: string | number;
    color?: string;
}

const Button = (props: ButtonProps) => {
    const style = {
        // backgroundColor: Color[props.color] || '#fff',
       
    };

    return (
        <button className='button-blue' style={style} >
            {props.text}
        </button>
    )
}

export { Button };