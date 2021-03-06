import React from "react";

export class Utils {
    static depthTree = (columns: any[], initialValue: number) => {
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
        
        return <div className='header-cell' style={{minWidth: column.width || '100px', maxWidth: column.width || '100px'}}>{column.text}</div>
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
            <div className='body-cell' style={{minWidth: col.width || '100px', maxWidth: col.width || '100px'}}>{value[col.dataIndex]}</div>    
        );
    }
}