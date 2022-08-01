import React from 'react';
import { Utils } from './Utils';

const Header = ({columns}) => {
    console.log(columns);

    return (
        <div className='header-row'>
            {columns.map((column) => {
                return Utils.createColumnElement(column);
            })}
        </div>
    );
}

export default Header;