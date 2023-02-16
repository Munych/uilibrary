import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './UI/Button/Button';
import Grid from './UI/Grid/Grid';
import { Column } from './UI/Grid/types/Column';

const columns: Column[] = [{
    text: 'ID',
    dataIndex: 'id',
    width: '20px'
}, {
    text: 'Name',
    dataIndex: 'name'
}, {
    text: 'Username',
    dataIndex: 'username'
}, {
    text: 'Email',
    dataIndex: 'email'
}, {
    text: 'Address',
    dataIndex: 'address',
    
    columns: [{
        text: 'Street',
        dataIndex: 'street'
    }, {
        text: 'Suite',
        dataIndex: 'suite'
    }, {
        text: 'City',
        dataIndex: 'city'
    }, {
        text: 'ZipCode',
        dataIndex: 'zipcode',
    }, {
        text: 'Geo',
        dataIndex: 'geo',

        columns: [{
            text: 'Lat',
            dataIndex: 'lat',
            width: '60px'
        }, {
            text: 'Lng',
            dataIndex: 'lng',
            width: '60px'
        }]
    }]
}, {
    text: 'Phone',
    dataIndex: 'phone'
}, {
    text: 'Website',
    dataIndex: 'website'
}, {
    text: 'Company',
    dataIndex: 'company',

    columns: [{
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'CatchPhrase',
        dataIndex: 'catchPhrase'
    }, {
        text: 'Bs',
        dataIndex: 'bs'
    }]
}];

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {setData(result)});
    }, []);

    const deleteHandler = (e: any): void => {
        console.log(e);
    }

    return (
        <div style={{height: '100%', width: '100%'}}>
            {/* <div style={{display: 'flex', flexDirection: 'row'}}>
                <Grid
                    columns={columns}
                    data={data}
                    deleteHandler={deleteHandler}
                    width={'100%'}
                    height={500}
                />
            </div> */}
            {/* <div style={{display: 'flex'}}>
                <Grid
                    columns={columns}
                    data={data}
                    deleteHandler={deleteHandler}
                    width={1000}
                    height={300}
                />
                <Grid
                    columns={columns}
                    data={data}
                    deleteHandler={deleteHandler}
                    width={1000}
                    height={300}
                />
            </div> */}
            <Button type='primary'>Primary button</Button>
        </div>
    )
}

export default App;