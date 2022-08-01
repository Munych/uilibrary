import React from 'react';
import Header from './Header';
import Body from './Body';
import './Grid.scss';

interface GridProps {
    columns: any[];
    data: any;
    deleteHandler: (e) => void;
    width ?: number;
    height ?: number;
}

const Grid = (props: GridProps) => {
    return (
        <div style={{width: props.width, height: props.height}} className='grid'>
            <Header columns={props.columns}/>
            <Body columns={props.columns} data={props.data} />
        </div>
    )
}

export default Grid;