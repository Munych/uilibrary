import React from 'react';
import { Utils } from './Utils';
import _ from 'lodash';

const Body = ({columns, data}) => {
    return (
        data.map(value => 
            <div className='body-row'>
                {columns.map(column =>{
                    if(column.hidden) {
                        return;
                    }
                    
                    return column.columns ?
                    Utils.getChildValues(column.columns, value[column.dataIndex]) :
                    <div 
                        className='body-cell' 
                        style={{minWidth: column.width || '100px', maxWidth: column.width || '100px'}}
                    >
                        {value[column.dataIndex]}
                    </div>
                })}
            </div>
        )
    )
}

export default Body;