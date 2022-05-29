import React from 'react';
import Header from './Header';
import Body from './Body';
import './Grid.scss';

const Grid = ({columns, data, deleteHandler}) => {
    return (
        <div className='grid'>
            <Header columns={columns}/>
            <Body columns={columns} data={data} />
        </div>
    )
}

export default Grid;