import React from 'react';
import Header from './Header';
import Body from './Body';
import './Grid.scss';

const Grid = ({columns, data, deleteHandler, width, height}) => {
    return (
        <div style={{width: width, height: height}} className='grid'>
            <Header columns={columns}/>
            <Body columns={columns} data={data} />
        </div>
    )
}

export default Grid;