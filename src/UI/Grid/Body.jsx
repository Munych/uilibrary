import React from 'react';
import { Utils } from './Utils';
import _ from 'lodash';

const Body = ({columns, data}) => {
    return (
        data.map(value => 
            <div className='body-row'>
                {columns.map(column =>
                    column.columns ? Utils.getChildValues(column.columns, value[column.dataIndex]) : 
                    <div className='header-cell'>{value[column.dataIndex]}</div>    
                )}
            </div>
        )
    )
}

export default Body;