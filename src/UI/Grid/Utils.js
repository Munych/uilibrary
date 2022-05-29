import React from "react";

export class Utils {
    static depthTree = (columns, initialValue) => {
        return columns.reduce((previousValue, column) => {
            if(column.columns) {
                return this.depthTree(column.columns, previousValue) + 1;
            }
            
            return previousValue;
    
        }, initialValue || 0);
    }

    static createColumnElement = (column) => {
        if(column.columns) {
            return this.createMultiHeader(column);
        }
        
        return <div className='header-cell' style={{flex: 1}}>{column.text}</div>
    }

    static createMultiHeader = (column) => {
        const { columns } = column;

        return (
            <div className="header-column">
                <div className="header-cell">{column.text}</div>
                <div className="header-row" style={{flex: 1}}>
                    {columns.map((col) => {
                        return this.createColumnElement(col);
                    })}
                </div>
            </div>
        );
    }

    static getChildValues = (columns, value) => {
        return columns.map(col => 
            col.columns ? this.getChildValues(col.columns, value[col.dataIndex]) :
            <div className='header-cell' style={{flex: 1}}>{value[col.dataIndex]}</div>    
        );
    }
}